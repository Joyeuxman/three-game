/*
  原生webgl绘制一个旋转的三角形
*/

var canvas = document.getElementById('myCanvas');
var gl = canvas.getContext('webgl');
console.log('gl===', gl);
// 创建 WebGLProgram
var program = gl.createProgram();

var VSHADER_SOURCE = `
  attribute vec4 a_Position;
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_ViewMatrix;
  void main(){
    gl_Position = u_ViewMatrix * u_ModelMatrix * a_Position;
  }
`;
var FSHADER_SOURCE = `
  void main(){
    gl_FragColor = vec4(1.0,0.0,0.0,1.0);
  }
`;

// create shader
function createShader(gl, sourceCode, type) {
  // 创建 WebGLShader
  var shader = gl.createShader(type);
  // 设置一个 WebGLShader 的源码
  gl.shaderSource(shader, sourceCode);
  // 编译 WebGLShader
  gl.compileShader(shader);
  return shader;
}

// define vertex shader
// 顶点着色器
var vertexShader = createShader(gl, VSHADER_SOURCE, gl.VERTEX_SHADER);

// define fragmeng shader
// 片元着色器
var fragmentShader = createShader(gl, FSHADER_SOURCE, gl.FRAGMENT_SHADER);

// attach program to shader
// 把 WebGLShader 添加到 WebGLProgram
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

// link to program
// 链接给入的 WebGLProgram 对象
gl.linkProgram(program);
// 使用指定的 WebGLProgram 作为当前渲染状态的一部分
gl.useProgram(program);
gl.program = program;

// 将顶点位置信息灌入顶点着色器
function initVertexBuffers(gl) {
  // 顶点个数
  var n = 3;
  // 顶点位置信息
  var vertices = new Float32Array([0, 0.5, -0.5, -0.5, 0.5, -0.5]);
  // var vertices = new Float32Array([-1, 1, -1, -1, 1, -1]);
  // 创建 WebGLBuffer 对象
  var buffer = gl.createBuffer();
  // 把 WebGLBuffer 对象绑定到指定目标上
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  // 更新缓冲数据
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  // 指定一个顶点attributes 数组中，顶点attributes 变量的数据格式和位置
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
  // 在给定的位置，启用顶点attribute数组
  gl.enableVertexAttribArray(a_Position);
  return n;
}

var n = initVertexBuffers(gl);
// 旋转的角度
var currentAngle = 0;
var g_last = Date.now();

// 返回uniform 变量的指针位置
var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
// 矩阵库
var modelMatrix = new Matrix4();

// 返回uniform 变量的指针位置
var u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');
var viewMatrix = new Matrix4();
// viewMatrix.lookAt(100, 100, 100, 0, 0, 0, 0, 1, 0);
viewMatrix.lookAt(0, 0, 0, 0, 0, -1, 0, 1, 0);

// 设置用于清空用的颜色
gl.clearColor(0, 0, 0, 1);

// 更新旋转的角度
function animate() {
  var now = Date.now();
  var duration = now - g_last;
  g_last = now;
  // 1s旋转180度
  currentAngle = currentAngle + (duration / 1000) * 180;
}

function draw() {
  // 根据坐标轴设置旋转角度
  modelMatrix.setRotate(currentAngle, 0, 1, 0);
  // 指定一个uniform矩阵变量()
  gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
  // 指定一个uniform矩阵变量(视图矩阵)
  gl.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix.elements);
  // 把指定的缓冲区清空为预设的值。
  gl.clear(gl.COLOR_BUFFER_BIT);
  // 渲染数组中的原始数据
  gl.drawArrays(gl.TRIANGLES, 0, n);
}

function tick() {
  animate();
  draw();
  // 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
  requestAnimationFrame(tick);
}

tick();
