import sceneConf from '../../conf/sceneConf';

class Camera {
  constructor() {
    this.instance = null;
  }

  init() {
    const aspect = window.innerHeight / window.innerWidth;
    //  30 * 30
    // 正交相机
    // OrthographicCamera( left, right, top, bottom, near, far )
    this.instance = new THREE.OrthographicCamera(
      -sceneConf.frustumSize,
      sceneConf.frustumSize,
      sceneConf.frustumSize * aspect,
      -sceneConf.frustumSize * aspect,
      -100,
      85
    );
    // 相机位置
    this.instance.position.set(-10, 10, 10);
    // 相机看向的位置
    this.target = new THREE.Vector3(0, 0, 0);
    this.instance.lookAt(this.target);
  }
}

export default new Camera();
