import * as THREE from "three";

/**
 * Damped CCD (cyclic coordinate descent) IK, operating directly on the real
 * loaded Object3D transforms — same math as a from-scratch analytic solver,
 * but reads world positions/axes straight off the live scene graph instead
 * of a parallel kinematic model, so it's exact for whatever the URDF
 * actually describes (arbitrary, non-axis-aligned hinge axes included).
 *
 * @param {object} root - the robot's root Group (only its subtree's matrices get updated)
 * @param {Array<{pivotObject:THREE.Object3D, axisLocal:THREE.Vector3, limit:{lower,upper}|null, get():number, set(v:number):void}>} chainJoints
 *   ordered base -> tip
 * @param {THREE.Object3D} tipObject - the effective end-effector (its world position is the target)
 * @param {THREE.Vector3} target - world-space point to reach
 */
export function solveIK(root, chainJoints, tipObject, target, iterations = 10, damping = 0.6) {
  const jointPos = new THREE.Vector3();
  const axis = new THREE.Vector3();
  const q = new THREE.Quaternion();
  const tipPos = new THREE.Vector3();
  const v1 = new THREE.Vector3();
  const v2 = new THREE.Vector3();
  const cross = new THREE.Vector3();

  for (let iter = 0; iter < iterations; iter++) {
    for (let j = chainJoints.length - 1; j >= 0; j--) {
      const jc = chainJoints[j];
      jc.pivotObject.getWorldPosition(jointPos);
      jc.pivotObject.getWorldQuaternion(q);
      axis.copy(jc.axisLocal).applyQuaternion(q).normalize();

      tipObject.getWorldPosition(tipPos);
      v1.copy(tipPos).sub(jointPos);
      v1.addScaledVector(axis, -v1.dot(axis));
      v2.copy(target).sub(jointPos);
      v2.addScaledVector(axis, -v2.dot(axis));

      const l1 = v1.length();
      const l2 = v2.length();
      if (l1 < 1e-5 || l2 < 1e-5) continue;
      v1.divideScalar(l1);
      v2.divideScalar(l2);

      const cosAngle = THREE.MathUtils.clamp(v1.dot(v2), -1, 1);
      let delta = Math.acos(cosAngle);
      cross.crossVectors(v1, v2);
      if (cross.dot(axis) < 0) delta = -delta;

      jc.set(jc.get() + delta * damping);
      root.updateMatrixWorld(true);
    }

    tipObject.getWorldPosition(tipPos);
    if (tipPos.distanceTo(target) < 0.004) break;
  }
}
