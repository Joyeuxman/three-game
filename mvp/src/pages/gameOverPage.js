/**
 *
 */

export default class GameOverPage {
  constructor(callbacks) {
    this.callbacks = callbacks;
  }

  init({ scene }) {
    console.log('GameOverPage init');
    this.scene = scene;
  }

  show() {
    console.log('GameOverPage show');
    this.obj.visible = true;
  }

  hide() {
    this.obj.visible = false;
  }
}
