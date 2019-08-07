import blockConf from '../conf/blockConf';

class BaseBlock {
  constructor(type) {
    this.type = type; // cuboid(立方体) cylinder(圆柱体)
    this.height = blockConf.height;
    this.width = blockConf.width;
  }
}

export default BaseBlock;
