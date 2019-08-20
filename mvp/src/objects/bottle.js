import bottleConf from '../../conf/bottleConf';
import blockConf from '../../conf/blockConf';
import { customAnimation } from '../../libs/animation1';

class Bottle {
  constructor() {}

  init() {
    const {
      specularMaterial,
      bottomMaterial,
      middleMaterial
    } = this.loadTexture();

    // 整体
    this.obj = new THREE.Object3D();
    this.obj.name = 'bottle';
    this.obj.position.set(
      bottleConf.initPosition.x,
      bottleConf.initPosition.y + 30,
      bottleConf.initPosition.z
    );

    this.bottle = new THREE.Object3D();

    const headRedius = bottleConf.headRedius;

    this.head = new THREE.Mesh(
      new THREE.OctahedronGeometry(headRedius),
      bottomMaterial
    );
    this.head.castShadow = true;

    const topGeometry = new THREE.SphereGeometry(headRedius / 1.4, 20, 20);
    topGeometry.scale(1, 0.54, 1);
    const top = new THREE.Mesh(topGeometry, specularMaterial);
    top.castShadow = true;
    top.position.x = 0;
    top.position.y = 1.8143 * headRedius;
    top.position.z = 0;

    const middle = new THREE.Mesh(
      new THREE.CylinderGeometry(
        headRedius / 1.4,
        (headRedius / 1.44) * 0.88,
        headRedius * 1.2,
        20
      ),
      middleMaterial
    );
    middle.castShadow = true;
    middle.position.x = 0;
    middle.position.y = 1.3857 * headRedius;
    middle.position.z = 0;

    const bottom = new THREE.Mesh(
      new THREE.CylinderGeometry(
        0.62857 * headRedius,
        0.907143 * headRedius,
        1.91423 * headRedius,
        20
      ),
      bottomMaterial
    );
    bottom.castShadow = true;

    this.body = new THREE.Object3D();
    this.body.add(top);
    this.body.add(bottom);
    this.body.add(middle);

    this.head.position.x = 0;
    this.head.position.y = 3.57143 * headRedius;
    this.head.position.z = 0;

    this.bottle.add(this.head);
    this.bottle.add(this.body);
    this.bottle.position.x = 0;
    this.bottle.position.y = 2.2;
    this.bottle.position.z = 0;

    this.obj.add(this.bottle);
  }

  loadTexture() {
    this.loader = new THREE.TextureLoader();
    const specularTexture = this.loader.load('/game/res/images/head.png');
    const specularMaterial = new THREE.MeshBasicMaterial({
      map: specularTexture
    });

    const bottomTexture = this.loader.load('/game/res/images/bottom.png');
    const bottomMaterial = new THREE.MeshBasicMaterial({ map: bottomTexture });

    const middleTexture = this.loader.load('/game/res/images/top.png');
    const middleMaterial = new THREE.MeshBasicMaterial({ map: middleTexture });
    return {
      specularMaterial,
      bottomMaterial,
      middleMaterial
    };
  }

  update() {
    this.head.rotation.y += 0.06;
  }

  showUp() {
    customAnimation.to(
      this.obj.position,
      {
        x: bottleConf.initPosition.x,
        y: bottleConf.initPosition.y + blockConf.height / 2,
        z: bottleConf.initPosition.z
      },
      1.5,
      'linear'
    );
  }
}

export default new Bottle();
