/**
 * 接收阴影
 */

class Ground {
  constructor() {}

  init() {
    const geometry = new THREE.PlaneGeometry(200, 200);
    const material = new THREE.ShadowMaterial({
      transparent: true,
      color: 0x000000,
      opacity: 0.3
    });

    this.instance = new THREE.Mesh(geometry, material);
    this.instance.receiveShadow = true;
    this.instance.rotation.x = -Math.PI / 2;
    this.instance.position.y = -16 / 3.2;
  }

  updatePosition(targetPosition) {
    this.instance.position.x = targetPosition.x;
    this.instance.position.z = targetPosition.z;
  }
}

export default new Ground();
