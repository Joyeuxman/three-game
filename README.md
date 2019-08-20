# 待完成

## quickstart

## 源码目录介绍
```
./js
├── base                                   // 定义游戏开发基础类
│   ├── animatoin.js                       // 帧动画的简易实现
│   ├── pool.js                            // 对象池的简易实现
│   └── sprite.js                          // 游戏基本元素精灵类
├── libs
│   ├── symbol.js                          // ES6 Symbol简易兼容
│   └── weapp-adapter.js                   // 小游戏适配器
├── npc
│   └── enemy.js                           // 敌机类
├── player
│   ├── bullet.js                          // 子弹类
│   └── index.js                           // 玩家类
├── runtime
│   ├── background.js                      // 背景类
│   ├── gameinfo.js                        // 用于展示分数和结算界面
│   └── music.js                           // 全局音效管理器
├── databus.js                             // 管控游戏状态
└── main.js                                // 游戏入口主函数

```


### WebGL API
#### 状态信息
* gl.activeTexture()
* gl.clearColor()
* gl.clearDepth()
* gl.depthFunc()
* gl.disable()
* gl.enable()
* gl.getParameter()
* gl.getError()
* gl.isEnabled()
#### 缓冲区
* gl.createBuffer()
* gl.bindBuffer()
* gl.bufferDate()
* gl.deleteBuffer()
* gl.isBuffer()
#### 纹理
* gl.createTexture()
* gl.deleteTexture()
* gl.getTexParameter()
* gl.bindTexture()
* gl.compressedTexImage2D()
#### 程序对象和着色器对象
* gl.createProgram()
* gl.deleteProgram()
* gl.isProgram()
* gl.linkProgram()
* gl.useProgram()
* gl.getProgramParameter()
* gl.getProgramInfoLog()
* gl.validateProgram()
* gl.attachShader()
* gl.detachShader()
* gl.createShader()
* gl.deleteShader()
* gl.isShader()
* gl.shaderSource()
* gl.compileShader()
* gl.getShaderParameter()
* gl.getShaderInfoLog()
* gl.bindAttribLocation()
#### Uniform 和 Attribute
* gl.getUniformLocation()
* gl.getAttribLocation()
* gl.getActiveUniform()
* gl.getActiveAttrib()
* gl.uniform()
* gl.uniformMatrixfv()
* gl.vertexAttribPointer()
* gl.getUniform()
* gl.getVertexAttrib()
* gl.vertexAttrib()
#### 绘制缓冲区
* gl.clear()
* gl.drawArrays()
* gl.drawElements()

