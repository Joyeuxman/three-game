/**
 *
 */

import gameController from './controller';

class Game {
  constructor() {
    this.gameController = gameController
  }

  init() {
    // debugger;
    this.gameController.initPages()
  }
}

export default new Game();
