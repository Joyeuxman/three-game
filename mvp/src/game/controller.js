/**
 *
 */

import gameView from './view';
import gameModel from './model';

class GameController {
  constructor() {
    this.gameView = gameView;
    this.gameModel = gameModel;
  }

  // 将该函数中的this固定在GameController(通过箭头函数)
  showGameOverPage = () => {
    this.gameView.showGameOverPage();
  };

  restartGame = () => {
    this.gameView.restartGame();
  };

  initPages() {
    const gamePageCallbacks = {
      showGameOverPage: this.showGameOverPage
    };
    const gameOverPageCallbacks = {
      gameRestart: this.restartGame
    };
    
    this.gameView.initGamePage(gamePageCallbacks);
    this.gameView.initGameOverPage(gameOverPageCallbacks);
  }
}

export default new GameController();
