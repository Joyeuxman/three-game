/**
 * 游戏主函数
 */

import * as THREE from '../libs/three.js';
import game from './game/game.js';

window.THREE = THREE;

// 坑二：ImageBitmap is not defined
// https://coding.imooc.com/learn/questiondetail/82631.html
GameGlobal.ImageBitmap = function() {};

console.log('THREE===', THREE);

class Main {
  constructor() {}

  // 静态方法
  static init() {
    game.init();
  }
}

export default Main;
