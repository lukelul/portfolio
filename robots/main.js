// Single source of truth for each live-mesh tile's config, read straight off
// its data attributes — used for both the auto-rotating thumbnail and (by
// key, from script.js's modal code) the bigger drag-to-IK view.
//
// The heavy work — three.js (CDN module) + urdf parsing + up to 19 MB of STL
// meshes per robot — is deferred: viewer.js is dynamically imported and each
// tile mounts only when it approaches the viewport, so first paint of the
// page costs none of it.
const configByKey = {};
const pendingTiles = new Map(); // wrap element → its canvas

document.querySelectorAll(".cad-3d-tile").forEach((wrap) => {
  const canvas = wrap.querySelector("canvas");
  if (!canvas) return;
  const key = wrap.dataset.key;
  configByKey[key] = {
    urdfUrl: wrap.dataset.robotUrdf,
    meshBaseUrl: wrap.dataset.robotMeshes,
    chain: wrap.dataset.robotChain ? wrap.dataset.robotChain.split(",") : undefined,
    tipLinkName: wrap.dataset.robotTip || undefined,
    glowScale: wrap.dataset.robotGlowScale ? parseFloat(wrap.dataset.robotGlowScale) : undefined,
    glowOpacityScale: wrap.dataset.robotGlowOpacity ? parseFloat(wrap.dataset.robotGlowOpacity) : undefined,
  };
  pendingTiles.set(wrap, { canvas, key });
});

let viewerModulePromise = null;
function loadViewer() {
  viewerModulePromise ??= import("./viewer.js?v=5");
  return viewerModulePromise;
}

function mountTile(wrap) {
  const tile = pendingTiles.get(wrap);
  if (!tile) return;
  pendingTiles.delete(wrap);
  loadViewer().then(({ mountRobotViewer }) => {
    mountRobotViewer(tile.canvas, { ...configByKey[tile.key], mode: "thumb" });
  });
}

const NEAR_PX = 150;

function stillNear(el) {
  const r = el.getBoundingClientRect();
  return r.bottom > -NEAR_PX && r.top < window.innerHeight + NEAR_PX;
}

/** Fires cb once document height has been stable for 500ms (hard cap 5s) —
    the masonry keeps reflowing while its lazy images stream in, and any
    intersection measured before that is fiction. */
function whenLayoutSettled(cb) {
  let done = false;
  const fire = () => {
    if (!done) {
      done = true;
      cb();
    }
  };
  let last = -1;
  let stableMs = 0;
  const iv = setInterval(() => {
    const h = document.documentElement.scrollHeight;
    if (h === last) {
      stableMs += 250;
      if (stableMs >= 500) {
        clearInterval(iv);
        fire();
      }
    } else {
      stableMs = 0;
      last = h;
    }
  }, 250);
  setTimeout(() => {
    clearInterval(iv);
    fire();
  }, 5000);
}

if (pendingTiles.size > 0) {
  if ("IntersectionObserver" in window) {
    // The masonry collapses before its lazy images have dimensions, so at
    // t=0 EVERY tile briefly "intersects" — mounting on the first signal
    // would fetch all 28 MB of meshes at first paint. On each hit, re-check
    // the tile's position once layout has had a beat to settle; if it moved
    // away, hand it back to the observer for its real approach.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          const wrap = entry.target;
          setTimeout(() => {
            if (!pendingTiles.has(wrap)) return;
            if (stillNear(wrap)) mountTile(wrap);
            else io.observe(wrap);
          }, 600);
        }
      },
      { rootMargin: `${NEAR_PX}px 0px` },
    );
    whenLayoutSettled(() => pendingTiles.forEach((_, wrap) => io.observe(wrap)));
  } else {
    [...pendingTiles.keys()].forEach(mountTile);
  }
}

// Bridge for script.js (a classic script, can't `import` this module
// directly) to open/close the bigger interactive view in the photo modal.
// The token guards the async import against open→close (or open→open) races:
// only the latest open may install its viewer.
let modalViewer = null;
let modalToken = 0;

window.RobotShowcase = {
  mountModal(canvas, key) {
    const token = ++modalToken;
    if (modalViewer) {
      modalViewer.dispose();
      modalViewer = null;
    }
    const config = configByKey[key];
    if (!config) return;
    loadViewer().then(({ mountRobotViewer }) => {
      if (token !== modalToken) return; // closed or reopened while loading
      modalViewer = mountRobotViewer(canvas, { ...config, mode: "modal", targetSize: 1.7 });
    });
  },
  disposeModal() {
    ++modalToken;
    if (modalViewer) {
      modalViewer.dispose();
      modalViewer = null;
    }
  },
};
