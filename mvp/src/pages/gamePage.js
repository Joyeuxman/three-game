/**
 *
 */
import { scene } from '../scene/index';
import Cuboid from '../../block/cuboid';
import Cylinder from '../../block/cylinder';
import ground from '../objects/ground'
import bottle from '../objects/bottle'

export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks;
  }

  init() {
    console.log('GamePage init');
    this.scene = scene;
    this.ground = ground;
    this.bottle = bottle;
    this.scene.init();
    this.ground.init();
    this.bottle.init();
    this.bottle = bottle;
    this.addInitBlock();
    this.addGround();
    this.addBottle();
    this.render();
  }

  render() {
    // console.log('GamePage render');
    this.scene.render();
    if(this.bottle){
      this.bottle.update();
    }
    requestAnimationFrame(this.render.bind(this))
  }

  addInitBlock(){
    const cuboidBlock = new Cuboid(-15,0,0)
    const cylinderBlock = new Cylinder(23,0,0)

    this.scene.instance.add(cuboidBlock.instance)
    this.scene.instance.add(cylinderBlock.instance)
  }

  addGround(){
    this.scene.instance.add(this.ground.instance)
    this.bottle.showUp()
  }

  addBottle(){
    this.scene.instance.add(this.bottle.obj)
  }

  show() {
    console.log('GamePage show');
    this.visible = true;
  }

  hide() {
    console.log('GamePage hide');
    this.visible = false;
  }

  restart() {
    console.log('GamePage restart');
  }
}
