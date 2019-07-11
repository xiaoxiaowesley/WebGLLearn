## WebGL 是一个状态机

## WebGL Context (WebGL上下文)用来与GPU交互
webgl context 上下文是用来调用webgl参数的实例。
在webgl中，通过调用canvas的`getContext()`可以获得webgl上下文句柄。

```var gl  = document.getElementById("glcanvas").getContext("webgl")```