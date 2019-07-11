## WebGL 是一个状态机

## WebGL Context (WebGL上下文)用来与GPU交互
webgl context 上下文是用来调用webgl参数的实例。
在webgl中，通过调用canvas的`getContext()`可以获得webgl上下文句柄。

```
var gl  = document.getElementById("glcanvas").getContext("webgl")
```

## 颜色缓冲区、深度缓冲区、蒙版缓冲区

- gl.COLOR_BUFFER_BIT
- gl.DEPTH_BUFFER_BIT
- gl.STENCIL_BUFFER_BIT

https://open.gl/depthstencils


## 网站


https://open.gl