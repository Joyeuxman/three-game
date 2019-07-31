var canvas = document.getElementById('myCanvas');
var gl = canvas.getContext('webgl');
console.log('gl===', gl);
// 创建 WebGLProgram
var program = gl.createProgram();

var VSHADER_SOURCE = `
  attribute vec4 a_Position;
  void main(){
    gl_Position = a_Position;
  }
`;
var FSHADER_SOURCE = `
  void main(){
    gl_FragColor = vec4(1.0,0.0,0.0,1.0);
  }
`;
var vertexShader;
var fragmentShader;

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
vertexShader = createShader(gl, VSHADER_SOURCE, gl.VERTEX_SHADER);

// define fragmeng shader
fragmentShader = createShader(gl, FSHADER_SOURCE, gl.FRAGMENT_SHADER);

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

function initVertexBuffers(gl) {
  var vertices = new Float32Array([0, 0.5, -0.5, -0.5, 0.5, -0.5]);
  // 创建 WebGLBuffer 对象
  var buffer = gl.createBuffer();
  var n = 3;
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

function draw() {
  // 设置用于清空用的颜色
  gl.clearColor(0, 0, 0, 1);
  // 渲染数组中的原始数据
  gl.drawArrays(gl.TRIANGLES, 0, n);
}
draw();
