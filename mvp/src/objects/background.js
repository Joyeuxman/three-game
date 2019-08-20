/**
 * 游戏背景
 * 位于camera坐标系正前方
 */

import sceneConf from '../../conf/sceneConf';

class Background {
  constructor() {}

  init() {
    const geometry = new THREE.PlaneGeometry(
      sceneConf.frustumSize * 2,
      (window.innerHeight / window.innerWidth) * sceneConf.frustumSize * 2
    );
    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      color: 0xd7dbe6,
      opacity: 1
    });

    this.instance = new THREE.Mesh(geometry, material);
  }
}

export default new Background();
