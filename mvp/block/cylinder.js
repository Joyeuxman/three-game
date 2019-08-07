import BaseBlock from './base';

/**
 * 圆柱状物
 * CylinderGeometry(radiusTop , radiusBottom , height , radialSegments )
 * radiusTop — 圆柱的顶部半径，默认值是1。
 * radiusBottom — 圆柱的底部半径，默认值是1。
 * height — 圆柱的高度，默认值是1。
 * radialSegments — 圆柱侧面周围的分段数，默认为8。
 */
class Cylinder extends BaseBlock {
  constructor(x, y, z, type, width) {
    super('cylinder');
    const size = width || this.width;
    const geometry = new THREE.CylinderGeometry(
      size / 2,
      size / 2,
      this.height,
      120
    );
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    this.instance = new THREE.Mesh(geometry, material);
    this.instance.name = 'block';
    this.x = x;
    this.y = y;
    this.z = z;
    this.instance.position.x = this.x;
    this.instance.position.y = this.y;
    this.instance.position.z = this.z;
  }
}

export default Cylinder;
