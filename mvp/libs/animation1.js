/**
 * @description animation library
 * @detail requestAnimationFrame
 * 1. from
 * 2. to
 * 3. duration
 * 4. type
 * 5. callback
 */

import Tween from './tween1';

const customAnimation = (exports.customAnimation = {});

customAnimation.to = function(from, to, duration, type) {
  console.log('19991', from, to, duration, type);
  for (let prop in to) {
    TweenAnimation(from[prop], to[prop], duration, type, value => {
      from[prop] = value;
    });
  }
};

function TweenAnimation(from, to, duration, type, callback) {
  const options = {
    duration: duration || 300,
    type: type || 'linear',
    callback: callback || function(){}
  };

  //  当前帧数
  let start = -1;
  const frameCount = Math.ceil((duration * 1000) / 17);
  const startTime = Date.now();
  let lastTime = Date.now();
  const tweenFn = Tween[type];

  const step = function() {
    const currentTime = Date.now();
    const interval = currentTime - lastTime;
    lastTime = currentTime;
    let fps = 0;

    if(interval){
      fps = Math.ceil(1000 / interval)
    }else{
      requestAnimationFrame(step);
      return;
    }

    if (fps >= 30) {
      start++;
    } else {
      const _start = Math.floor(interval / 17);
      start = start + _start;
    }

    console.log(interval, start, frameCount);

    const value = tweenFn(start, from, to - from, frameCount);
    if (start <= frameCount) {
      // 动画继续
      options.callback(value);
      requestAnimationFrame(step);
    } else {
      // 动画结束
      options.callback(to, true);
    }
  };

  step();
}
