/*
  three.js绘制旋转三角形
*/

var width = 400;
var height = 400;

var canvas = document.getElementById('myCanvas');
// 渲染器
// 渲染器决定了渲染的结果应该画在页面的什么元素上面，并且以怎样的方式来绘制
var renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

// 场景
// 场景是所有物体的容器，如果要显示一个苹果，就需要将苹果对象加入场景中
var sence = new THREE.Scene();

// 正交相机
// 相机决定了场景中那个角度的景色会显示出来。相机就像人的眼睛一样，人站在不同位置，抬头或者低头都能够看到不同的景色
var camera = new THREE.OrthographicCamera(
  -width / 2,
  width / 2,
  height / 2,
  -height / 2,
  -1000,
  1000
);

// 设置清除的颜色
renderer.setClearColor(new THREE.Color(0x000000, 1));
// 将输出canvas的大小调整为(width, height)
renderer.setSize(400, 400);
// 用相机(camera)渲染一个场景(scene)
renderer.render(sence, camera);

// 从点来创建一个Shape  一个Vector2数组
var triAngleShape = new THREE.Shape();
triAngleShape.moveTo(0, 100);
triAngleShape.lineTo(-100, -100);
triAngleShape.lineTo(100, -100);
triAngleShape.lineTo(0, 100);

// 几何形
// 从一个或多个路径形状中创建一个单面多边形几何体。
var geometry = new THREE.ShapeGeometry(triAngleShape);
// 基础网格材质
// 一个以简单着色（平面或线框）方式来绘制几何体的材质
// 这种材质不受光照的影响
var material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide // 双面
});

// 模型
// 表示基于以三角形为polygon mesh（多边形网格）的物体的类
var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
mesh.position.y = 0;
mesh.position.z = 1;
sence.add(mesh);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 0;
camera.lookAt(new THREE.Vector3(0, 0, 1));

var currentAngle = 0;
var endTime = Date.now();

function animate() {
  var now = Date.now();
  var duration = now - endTime;
  endTime = now;
  currentAngle = currentAngle + (duration / 1000) * Math.PI;
}

function render() {
  animate();
  // 物体的局部旋转，以弧度来表示
  mesh.rotation.set(0, 0, currentAngle);
  renderer.render(sence, camera);
  requestAnimationFrame(render);
}

render();
