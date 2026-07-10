import { mountRobotViewer } from "./viewer.js";

// Thumbnail viewers — auto-rotating, gated by IntersectionObserver so they
// only render while their tile is actually on screen.
document.querySelectorAll(".cad-3d-tile").forEach((wrap) => {
  const canvas = wrap.querySelector("canvas");
  if (!canvas) return;
  mountRobotViewer(canvas, {
    urdfUrl: wrap.dataset.robotUrdf,
    meshBaseUrl: wrap.dataset.robotMeshes,
    mode: "thumb",
  });
});

// Bridge for script.js (a classic script, can't `import` this module
// directly) to open/close the bigger interactive view in the photo modal.
let modalViewer = null;

window.RobotShowcase = {
  mountModal(canvas, { urdfUrl, meshBaseUrl }) {
    if (modalViewer) modalViewer.dispose();
    modalViewer = mountRobotViewer(canvas, { urdfUrl, meshBaseUrl, mode: "modal", targetSize: 1.7 });
  },
  disposeModal() {
    if (modalViewer) {
      modalViewer.dispose();
      modalViewer = null;
    }
  },
};
