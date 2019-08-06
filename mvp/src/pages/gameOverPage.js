/**
 *
 */

export default class GameOverPage {
  constructor(callbacks) {
    this.callbacks = callbacks;
  }

  init({ sence }) {
    console.log('GameOverPage init');
    this.sence = sence;
    this.initGameOverCanvas();
  }

  // 2D如何转为为3D?
  // 创建一个2Dcanvas图片，将这张图片绘制在THREE中物体的纹理上
  initGameOverCanvas() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const aspect = w / h;
    this.canvas = document.createElement('canvas');
    this.canvas.width = w;
    this.canvas.height = h;
    // 纹理
    this.texture = new THREE.Texture(this.canvas);
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      side: THREE.DoubleSide
    });
    // 3D矩形平面
    this.geometry = new THREE.PlaneGeometry(w, h);
    this.obj = new THREE.Mesh(this.geometry, this.material);
    this.obj.position.z = 1;
    // y轴旋转180度
    this.obj.rotation.y = Math.PI;
    // 2D图片
    // 坑：fillStyle要写在fillRect之前
    this.context = this.canvas.getContext('2d');
    this.context.fillStyle = '#333';
    this.context.fillRect((w - 200) / 2, (h - 100) / 2, 200, 100);
    this.context.fillStyle = '#eee';
    this.context.font = '20px Georgia';
    this.context.fillText('Game Over', (w - 200) / 2 + 50, (h - 100) / 2 + 55);

    this.texture.needsUpdate = true;
    this.sence.add(this.obj);
  }

  show() {
    console.log('GameOverPage show');
  }
}
