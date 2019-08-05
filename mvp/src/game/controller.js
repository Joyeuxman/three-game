/**
 *
 */

import gameView from './view';
import gameModel from './model';

class GameController {
  constructor(){
    this.gameview = gameView
    this.gameModel = gameModel
  }

  // 将该函数中的this固定在GameController(通过箭头函数)
  showGameOverPage = () =>{
    this.gameView.showGameOverPage()
  }

  restartGame = () => {
    this.gameview.restartGame()
  }

  initPages(){
    const gamePageCallbacks = {
      showGameOverPage = this.showGameOverPage
    }
    const gameOverPageCallbacks = {
      gameRestart = this.restartGame
    }

    this.gameview.initGameOverPage(gameOverPageCallbacks)
    this.gameview.initGamePage(gamePageCallbacks)
  }
}

export default new GameController()