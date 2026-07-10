import * as THREE from "three";
import { STLLoader } from "https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/loaders/STLLoader.js";
import { ColladaLoader } from "https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/loaders/ColladaLoader.js";

// ─── Minimal vanilla URDF loader ─────────────────────────────────────
// Parses a plain (non-xacro) URDF, loads each link's visual mesh (STL or
// Collada, picked per-file by extension), and builds a THREE.Group
// hierarchy that mirrors the kinematic tree: linkGroup -> jointOrigin
// (fixed) -> jointAxis (driven) -> childLink. Links may have multiple
// child joints (humanoid branching, not just a single serial chain).

const stlLoader = new STLLoader();
const colladaLoader = new ColladaLoader();

function vec3(str, fallback = "0 0 0") {
  return (str ?? fallback).trim().split(/\s+/).map(Number);
}

function rpyToQuaternion([roll, pitch, yaw]) {
  return new THREE.Quaternion().setFromEuler(new THREE.Euler(roll, pitch, yaw, "XYZ"));
}

function loadMesh(url, sharedMaterial) {
  const ext = url.split(".").pop().toLowerCase();
  if (ext === "dae") {
    return new Promise((resolve, reject) => {
      colladaLoader.load(
        url,
        (collada) => {
          const scene = collada.scene;
          scene.traverse((o) => {
            if (o.isMesh) {
              // Collada ships its own baked materials — override with the
              // shared one so every robot reads as the same grayish metal
              // regardless of source format (STL has no material to keep).
              o.material = sharedMaterial;
              o.castShadow = true;
              o.receiveShadow = true;
            }
          });
          resolve(scene);
        },
        undefined,
        reject,
      );
    });
  }
  return new Promise((resolve, reject) => {
    stlLoader.load(
      url,
      (geometry) => {
        geometry.computeVertexNormals();
        resolve(new THREE.Mesh(geometry, sharedMaterial));
      },
      undefined,
      reject,
    );
  });
}

function parseURDF(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, "application/xml");
  if (doc.querySelector("parsererror")) throw new Error("Failed to parse URDF XML");

  const links = new Map();
  for (const linkEl of doc.querySelectorAll("robot > link")) {
    const name = linkEl.getAttribute("name");
    const meshEl = linkEl.querySelector("visual geometry mesh");
    const originEl = linkEl.querySelector("visual origin");
    const filename = meshEl ? meshEl.getAttribute("filename").split(/[\\/]/).pop() : null;
    links.set(name, {
      name,
      meshFile: filename,
      visualOrigin: {
        xyz: vec3(originEl?.getAttribute("xyz")),
        rpy: vec3(originEl?.getAttribute("rpy")),
      },
    });
  }

  const joints = [];
  const childLinkNames = new Set();
  for (const jointEl of doc.querySelectorAll("robot > joint")) {
    const originEl = jointEl.querySelector("origin");
    const axisEl = jointEl.querySelector("axis");
    const limitEl = jointEl.querySelector("limit");
    const parent = jointEl.querySelector("parent").getAttribute("link");
    const child = jointEl.querySelector("child").getAttribute("link");
    childLinkNames.add(child);
    joints.push({
      name: jointEl.getAttribute("name"),
      type: jointEl.getAttribute("type"),
      parent,
      child,
      origin: {
        xyz: vec3(originEl?.getAttribute("xyz")),
        rpy: vec3(originEl?.getAttribute("rpy")),
      },
      axis: vec3(axisEl?.getAttribute("xyz"), "1 0 0"),
      limit: limitEl
        ? { lower: Number(limitEl.getAttribute("lower")), upper: Number(limitEl.getAttribute("upper")) }
        : null,
    });
  }

  const rootName = [...links.keys()].find((name) => !childLinkNames.has(name));
  const jointsByParent = new Map();
  for (const j of joints) {
    if (!jointsByParent.has(j.parent)) jointsByParent.set(j.parent, []);
    jointsByParent.get(j.parent).push(j);
  }

  return { links, jointsByParent, rootName };
}

/**
 * @param {object} opts
 * @param {string} opts.urdfUrl
 * @param {string} opts.meshBaseUrl - directory containing the meshes, trailing slash
 * @param {THREE.Material} [opts.material] - shared material applied to every link mesh,
 *   STL or Collada (Collada's own baked materials are overridden for a uniform look)
 * @returns {Promise<{root: THREE.Group, joints: Record<string, {type,limit,get,set}>, linkGroups: Record<string, THREE.Group>}>}
 */
export async function loadURDFArm({ urdfUrl, meshBaseUrl, material }) {
  const xmlText = await (await fetch(urdfUrl)).text();
  const { links, jointsByParent, rootName } = parseURDF(xmlText);

  const sharedMaterial = material ?? new THREE.MeshStandardMaterial({
    color: 0xffffff, metalness: 0.6, roughness: 0.35,
  });

  const root = new THREE.Group();
  root.name = "urdf-root";

  const linkGroups = {};
  const joints = {};
  const meshLoads = [];

  function buildLink(attachPoint, linkName) {
    const link = links.get(linkName);
    if (!link) return;
    const linkGroup = new THREE.Group();
    linkGroup.name = linkName;
    attachPoint.add(linkGroup);
    linkGroups[linkName] = linkGroup;

    if (link.meshFile) {
      const meshUrl = meshBaseUrl + link.meshFile;
      meshLoads.push(
        loadMesh(meshUrl, sharedMaterial).then((obj) => {
          obj.position.set(...link.visualOrigin.xyz);
          obj.quaternion.copy(rpyToQuaternion(link.visualOrigin.rpy));
          linkGroup.add(obj);
        }).catch((err) => console.warn("mesh load failed:", meshUrl, err)),
      );
    }

    for (const joint of jointsByParent.get(linkName) ?? []) {
      const originGroup = new THREE.Group();
      originGroup.name = `${joint.name}_origin`;
      originGroup.position.set(...joint.origin.xyz);
      originGroup.quaternion.copy(rpyToQuaternion(joint.origin.rpy));
      linkGroup.add(originGroup);

      let driven = originGroup;
      if (joint.type === "revolute" || joint.type === "continuous" || joint.type === "prismatic") {
        driven = new THREE.Group();
        driven.name = `${joint.name}_axis`;
        originGroup.add(driven);

        const axis = new THREE.Vector3(...joint.axis).normalize();
        const isPrismatic = joint.type === "prismatic";
        let value = 0;
        joints[joint.name] = {
          type: joint.type,
          limit: joint.limit,
          // IK support: the pivot's world position is originGroup's world
          // position (driven only rotates/translates from there), and the
          // world-space rotation axis is `axisLocal` transformed by
          // originGroup's world orientation (the frame the axis is defined
          // in, before this joint's own variable rotation is applied).
          pivotObject: originGroup,
          axisLocal: axis,
          get: () => value,
          set: (v) => {
            value = joint.limit ? Math.max(joint.limit.lower, Math.min(joint.limit.upper, v)) : v;
            if (isPrismatic) driven.position.copy(axis).multiplyScalar(value);
            else driven.quaternion.setFromAxisAngle(axis, value);
          },
        };
      }

      buildLink(driven, joint.child);
    }
  }

  buildLink(root, rootName);
  await Promise.all(meshLoads);

  return { root, joints, linkGroups };
}
