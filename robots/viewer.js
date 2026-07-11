import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/controls/OrbitControls.js";
import { loadURDFArm } from "./urdfArm.js?v=4";
import { solveIK } from "./ik.js";

/**
 * Mounts a small, self-contained robot viewer into a canvas.
 * mode: "thumb" (auto-rotating rig, idle joint sway, gated by IntersectionObserver)
 *       "modal" (bigger; drag the end-effector handle to IK-drive the chain,
 *                drag empty space to orbit, scroll to zoom)
 *
 * @param {object} opts
 * @param {string[]} [opts.chain] - joint names, base -> tip (modal mode only)
 * @param {string} [opts.tipLinkName] - link whose world position is the effective end-effector
 * @param {number} [opts.glowScale] - per-robot size multiplier for the handle glow (some
 *   meshes read brighter/bigger than others at the same absolute glow size)
 * @param {number} [opts.glowOpacityScale] - per-robot brightness multiplier for the handle glow
 * @returns {{ dispose(): void }}
 */
export function mountRobotViewer(canvas, { urdfUrl, meshBaseUrl, mode = "thumb", targetSize = 1.5, chain, tipLinkName, glowScale = 1, glowOpacityScale = 1 }) {
  const parent = canvas.parentElement;
  if (parent && getComputedStyle(parent).position === "static") parent.style.position = "relative";

  function overlay(text) {
    const el = document.createElement("div");
    el.textContent = text;
    el.style.cssText =
      "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;" +
      "color:rgba(255,255,255,0.65);font:11px monospace;letter-spacing:0.05em;text-transform:uppercase;" +
      "text-align:center;padding:1rem;pointer-events:none;background:rgba(8,15,10,0.35);";
    parent?.appendChild(el);
    return el;
  }

  const hasWebGL = (() => {
    try { return !!(canvas.getContext("webgl2") || canvas.getContext("webgl")); }
    catch { return false; }
  })();
  if (!hasWebGL) {
    const noWebglEl = overlay("WebGL unavailable in this browser — can't render this mesh here.");
    return { dispose() { noWebglEl.remove(); } };
  }

  const loadingEl = overlay("loading mesh…");

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.05, 50);
  camera.position.set(1.3, 0.9, 1.9);
  camera.lookAt(0, 0, 0);

  const d1 = new THREE.DirectionalLight(0xffffff, 2.0); d1.position.set(3, 5, 4); scene.add(d1);
  const d2 = new THREE.DirectionalLight(0xffffff, 1.0); d2.position.set(-4, 2, -3); scene.add(d2);
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  const rig = new THREE.Group();
  scene.add(rig);

  const canDrag = mode === "modal" && chain && chain.length && tipLinkName;

  let controls = null;
  if (mode === "modal") {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.minDistance = 0.8;
    controls.maxDistance = 5;
    controls.autoRotate = !canDrag;
    controls.autoRotateSpeed = 0.7;
    controls.target.set(0, 0, 0);
  }

  // Handle — the end effector is marked purely by a soft glow (no visible
  // solid core), built from three additive-blended, depth-unwritten shells
  // at decreasing opacity to fake a smooth bloom falloff (there's no real
  // bloom postprocessing pass here), plus a generous invisible sphere for
  // easy hit-testing.
  let handleHit = null;
  let handleGlowCore = null;
  let handleGlowMid = null;
  let handleGlowOuter = null;
  if (canDrag) {
    const glowMaterial = (opacity) => new THREE.MeshBasicMaterial({
      color: 0xb8ff3c, transparent: true, opacity: opacity * glowOpacityScale, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    handleGlowCore = new THREE.Mesh(new THREE.SphereGeometry(0.045 * glowScale, 16, 16), glowMaterial(0.3));
    handleGlowCore.renderOrder = 10;
    scene.add(handleGlowCore);
    handleGlowMid = new THREE.Mesh(new THREE.SphereGeometry(0.085 * glowScale, 16, 16), glowMaterial(0.14));
    handleGlowMid.renderOrder = 9;
    scene.add(handleGlowMid);
    handleGlowOuter = new THREE.Mesh(new THREE.SphereGeometry(0.13 * glowScale, 16, 16), glowMaterial(0.06));
    handleGlowOuter.renderOrder = 8;
    scene.add(handleGlowOuter);

    handleHit = new THREE.Mesh(new THREE.SphereGeometry(0.09 * glowScale, 12, 12), new THREE.MeshBasicMaterial({ visible: false }));
    scene.add(handleHit);
  }

  let joints = {};
  let jointNames = [];
  let chainJoints = null;
  let tipObject = null;
  let loaded = false;

  loadURDFArm({ urdfUrl, meshBaseUrl }).then(({ root, joints: j, linkGroups }) => {
    joints = j;
    jointNames = Object.keys(joints);

    const converter = new THREE.Group();
    converter.rotation.x = -Math.PI / 2; // URDF Z-up -> three.js Y-up
    converter.add(root);
    converter.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(converter);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = targetSize / Math.max(size.x, size.y, size.z, 1e-6);

    converter.position.set(-center.x, -center.y, -center.z);
    const normalized = new THREE.Group();
    normalized.scale.setScalar(scale);
    normalized.add(converter);
    rig.add(normalized);

    if (canDrag) {
      chainJoints = chain.map((name) => joints[name]).filter(Boolean);
      tipObject = linkGroups[tipLinkName] ?? null;
      if (!tipObject || chainJoints.length !== chain.length) {
        console.warn("robot viewer: chain/tip not fully resolved, dragging disabled", urdfUrl);
        chainJoints = null;
      }
    }

    loaded = true;
    loadingEl.remove();
  }).catch((err) => {
    console.warn("robot viewer load failed:", urdfUrl, err);
    loadingEl.textContent = "couldn't load this mesh — check your connection and reload.";
  });

  function resize() {
    const w = canvas.clientWidth || canvas.parentElement.clientWidth || 400;
    const h = canvas.clientHeight || canvas.parentElement.clientHeight || 400;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  resize();

  // ─── Drag-to-IK (modal mode with a resolved chain) ───────────────────
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const dragPlane = new THREE.Plane();
  const planeHit = new THREE.Vector3();
  let dragging = false;

  function ndcFromEvent(e) {
    const rect = canvas.getBoundingClientRect();
    ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function onPointerDown(e) {
    if (!chainJoints || !tipObject) return;
    ndcFromEvent(e);
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObject(handleHit, false);
    if (hit.length === 0) return;
    dragging = true;
    if (controls) controls.enabled = false;
    canvas.style.cursor = "grabbing";
    e.stopPropagation();
  }
  function onPointerMove(e) {
    if (!dragging || !tipObject) return;
    ndcFromEvent(e);
    raycaster.setFromCamera(ndc, camera);
    const normal = new THREE.Vector3();
    camera.getWorldDirection(normal);
    const tipPos = new THREE.Vector3();
    tipObject.getWorldPosition(tipPos);
    dragPlane.setFromNormalAndCoplanarPoint(normal, tipPos);
    if (raycaster.ray.intersectPlane(dragPlane, planeHit)) {
      solveIK(rig, chainJoints, tipObject, planeHit);
    }
  }
  function onPointerUp() {
    if (!dragging) return;
    dragging = false;
    if (controls) controls.enabled = true;
    canvas.style.cursor = "grab";
  }

  if (canDrag) {
    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }

  let running = false;
  let animId = null;
  let prevT = 0;
  let rotY = 0;

  function tick(now) {
    if (!running) return;
    animId = requestAnimationFrame(tick);
    const t = now * 0.001;
    const dt = Math.min(t - prevT, 0.05);
    prevT = t;

    if (mode === "thumb") {
      rotY += 0.22 * dt;
      rig.rotation.y = rotY;
    } else if (controls) {
      controls.update();
    }

    if (loaded) {
      if (mode === "thumb") {
        jointNames.forEach((name, i) => {
          const amp = 0.16 + 0.02 * (i % 5);
          const freq = 0.18 + 0.03 * (i % 4);
          joints[name].set(Math.sin(t * freq + i * 1.9) * amp);
        });
      }
      if (handleGlowCore && tipObject) {
        const p = new THREE.Vector3();
        tipObject.getWorldPosition(p);
        handleHit.position.copy(p);
        handleGlowCore.position.copy(p);
        handleGlowMid.position.copy(p);
        handleGlowOuter.position.copy(p);
        const pulse = 1 + Math.sin(t * 3) * 0.15;
        handleGlowCore.scale.setScalar(pulse);
        handleGlowMid.scale.setScalar(pulse);
        handleGlowOuter.scale.setScalar(1 + Math.sin(t * 3) * 0.25);
      }
    }

    renderer.render(scene, camera);
  }

  function start() {
    if (running) return;
    running = true;
    prevT = performance.now() * 0.001;
    resize();
    animId = requestAnimationFrame(tick);
  }
  function stop() {
    running = false;
    if (animId) cancelAnimationFrame(animId);
  }

  let intersectionObserver = null;
  if (mode === "thumb") {
    intersectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
      { threshold: 0.05 },
    );
    intersectionObserver.observe(canvas);
  } else {
    if (canDrag) canvas.style.cursor = "grab";
    start();
  }

  return {
    dispose() {
      loadingEl.remove();
      stop();
      resizeObserver.disconnect();
      if (intersectionObserver) intersectionObserver.disconnect();
      if (canDrag) {
        canvas.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
      }
      if (controls) controls.dispose();
      renderer.dispose();
      scene.traverse((o) => {
        if (o.isMesh) {
          o.geometry?.dispose();
          if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
          else o.material?.dispose();
        }
      });
    },
  };
}
