import camera from './camera';

class Scene {
  constructor() {
    this.instance = null;
  }

  init() {
    this.instance = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true, //抗锯齿
      preserveDrawingBuffer: true // 提升性能
    });

    this.camera = camera;
    this.camera.init();
    this.instance.add(this.camera.instance);

    // 添加坐标辅助器
    this.axesHelper = new THREE.AxesHelper(100);
    console.log('axesHelper', this.axesHelper);
    this.instance.add(this.axesHelper);
  }

  render() {
    this.renderer.render(this.instance, this.camera.instance);
  }
}

export default new Scene();
