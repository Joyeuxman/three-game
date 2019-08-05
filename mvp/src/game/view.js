/**
 *
 */

import GamePage from '../pages/gamePage';
import GameOverPage from '../pages/gameOverPage';

class GameView {
  constructor() {}

  initGamePage(callbacks) {
    this.gamePage = new GamePage(callbacks);
    this.gamePage.init();
  }

  restartGame(){
    this.gamePage.restart()
  }

  initGameOverPage(callbacks) {
    this.gameOverPage = new GameOverPage(callbacks);
    this.gameOverPage.init();
  }

  showGameOverPage (){
    this.gameOverPage.show();
  };
}

export default new GameView();