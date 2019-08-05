/**
 * 游戏主函数
 */

import * as THREE from '../libs/three.js';
import game from './game/game.js';

window.THREE = THREE;

console.log('THREE===', THREE);

class Main {
  constructor() {}
  
  // 静态方法
  static init() {
    game.init();
  }
}

export default Main;