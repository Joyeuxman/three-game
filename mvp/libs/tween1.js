const Tween = {
  linear: function Linear(currentFrame, from ,range,totalFrame){
    return currentFrame * (range / totalFrame) + from;
  }
}
export default Tween;