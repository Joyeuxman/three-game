function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl');
  if (!gl) {
    alert(
      'Unable to initialize WebGL. Your brower or machine may not supprot it.'
    );
    return;
  }
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

const vsSource = `
  attribute vec4 aVertexPosition;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  viod main(){
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  }
`;

const fsSource = `
  void main(){
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
`;

// 初始化着色器程序，让WebGL知道如何绘制我们的数据
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // 创建着色器程序
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // 创建失败，alert
  if (!gl.getProgramParamter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      'Unable to initialize the shader program:' +
        gl.getProgramInfoLog(shaderProgram)
    );
    return;
  }

  return shaderProgram;
}

// 创建指定类型的着色器，上传source源码并编译
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);

  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      'An error occurred compiling the shaders:' + gl.getShaderInfoLog(shader)
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

const programInfo = {
  program: shaderProgram,
  attribLocations: {
    // 顶点位置
    vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition')
  },
  uniformLocations: {
    // 矩阵
    projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix')
  }
};

const horizAspect = 480.0 / 640.0;

function initBuffers() {
  squareVerticesBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

  const vertices = [
    1.0, 1.0, 0.0,
    -1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0
  ]

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices),gl.STATIC_DRAW)
}

function drawSence(gl, programInfo, buffers){
  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clearDepth(1.0)
  gl.enable(gl.DEPTH_TEST)
  gl.depthFunc(gl.LEQUAL)

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  const fieldOfView = 45 * Math.PI / 180
  const aspect = gl.canvas.clientWdith / gl.canvas.clientHeight
  const zNear = 0.1
  const zFar = 100
  const projectionMatrix = mat4.create();

  mat4.perspective(projectionMatrix,fieldOfView,aspect,zNear,zFar)

  const modelViewMatrix = mat4.create()
  mat4.translate(modelViewMatrix,modelViewMatrix,[-0.0,0.0,-6.0])
  
}
