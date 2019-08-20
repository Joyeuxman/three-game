import camera from './camera';
import light from './light';
import background from '../objects/background';

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

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.camera = camera;
    this.light = light;
    this.background = background;

    this.camera.init();
    this.light.init();
    this.background.init();
    this.background.instance.position.z = -84;

    this.instance.add(this.camera.instance);
    for (let lightType in this.light.instance) {
      this.instance.add(this.light.instance[lightType]);
    }
    this.instance.add(this.light.instance.shadowLightHelper);
    console.log('111', this.background.instance);
    this.camera.instance.add(this.background.instance);

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
