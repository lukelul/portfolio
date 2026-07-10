import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/controls/OrbitControls.js";
import { loadURDFArm } from "./urdfArm.js";

/**
 * Mounts a small, self-contained robot viewer into a canvas.
 * mode: "thumb" (auto-rotating rig, no controls, gated by IntersectionObserver)
 *       "modal" (bigger, drag-to-orbit / scroll-to-zoom, runs until disposed)
 *
 * @returns {{ dispose(): void }}
 */
export function mountRobotViewer(canvas, { urdfUrl, meshBaseUrl, mode = "thumb", targetSize = 1.5 }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.05, 50);
  camera.position.set(1.3, 0.9, 1.9);
  camera.lookAt(0, 0, 0);

  const d1 = new THREE.DirectionalLight(0x9fd8ff, 2.1); d1.position.set(3, 5, 4); scene.add(d1);
  const d2 = new THREE.DirectionalLight(0x8ff0dc, 1.3); d2.position.set(-4, 2, -3); scene.add(d2);
  scene.add(new THREE.AmbientLight(0x1a2530, 1.6));

  const rig = new THREE.Group();
  scene.add(rig);

  let controls = null;
  if (mode === "modal") {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.minDistance = 0.8;
    controls.maxDistance = 5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.7;
    controls.target.set(0, 0, 0);
  }

  let joints = {};
  let jointNames = [];
  let loaded = false;

  loadURDFArm({ urdfUrl, meshBaseUrl }).then(({ root, joints: j }) => {
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

    loaded = true;
  }).catch((err) => console.warn("robot viewer load failed:", urdfUrl, err));

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
      jointNames.forEach((name, i) => {
        const amp = 0.16 + 0.02 * (i % 5);
        const freq = 0.18 + 0.03 * (i % 4);
        joints[name].set(Math.sin(t * freq + i * 1.9) * amp);
      });
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
    start();
  }

  return {
    dispose() {
      stop();
      resizeObserver.disconnect();
      if (intersectionObserver) intersectionObserver.disconnect();
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
