import { mountRobotViewer } from "./viewer.js?v=4";

// Single source of truth for each live-mesh tile's config, read straight off
// its data attributes — used for both the auto-rotating thumbnail and (by
// key, from script.js's modal code) the bigger drag-to-IK view.
const configByKey = {};

document.querySelectorAll(".cad-3d-tile").forEach((wrap) => {
  const canvas = wrap.querySelector("canvas");
  if (!canvas) return;
  const key = wrap.dataset.key;
  const config = {
    urdfUrl: wrap.dataset.robotUrdf,
    meshBaseUrl: wrap.dataset.robotMeshes,
    chain: wrap.dataset.robotChain ? wrap.dataset.robotChain.split(",") : undefined,
    tipLinkName: wrap.dataset.robotTip || undefined,
  };
  configByKey[key] = config;
  mountRobotViewer(canvas, { ...config, mode: "thumb" });
});

// Bridge for script.js (a classic script, can't `import` this module
// directly) to open/close the bigger interactive view in the photo modal.
let modalViewer = null;

window.RobotShowcase = {
  mountModal(canvas, key) {
    if (modalViewer) modalViewer.dispose();
    const config = configByKey[key];
    if (!config) return;
    modalViewer = mountRobotViewer(canvas, { ...config, mode: "modal", targetSize: 1.7 });
  },
  disposeModal() {
    if (modalViewer) {
      modalViewer.dispose();
      modalViewer = null;
    }
  },
};
