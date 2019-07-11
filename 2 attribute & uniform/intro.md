# attribute & uniform

## 如何往shader 里面传递数据？

1. 在着色器中，使用attribute和uniform修饰符声明变量

- attribute 用于顶点着色器（Vertex Shader）
- uniform 用于顶点着色器（Vertex Shader）和片元着色器（Fragment Shader）都能使用。

2. 使用gl.getAttribLocation 或者 gl.getUniformLocation获得变量的位置

3. 使用gl.vertexAttribXXX函数传递attribute数据
   使用gl.gl.uniformXXX 函数传递uniform 数据




## 传递attribute数据

1.顶点着色器中使用attribute声明变量

```   
attribute vec4 input_Position;
void main()
{
    gl_Position = input_Position;
    gl_PointSize = 10.0;
}
```

2.使用getAttribLocation函数获取变量的位置（index）

```
var input_position_Index = gl.getAttribLocation(program, 'input_Position');
```

3.使用vertexAttribXXX函数传入具体数值
```
gl.vertexAttrib3f(input_position_Index, 0.5, 0.5, 0.5);
```

留意到因输入的参数的类型有多种，vertexAttribXX函数根据参数类型，数值类型有一下几种分类

```
void gl.vertexAttrib1f(index, v0);
void gl.vertexAttrib2f(index, v0, v1);
void gl.vertexAttrib3f(index, v0, v1, v2);
void gl.vertexAttrib4f(index, v0, v1, v2, v3);

void gl.vertexAttrib1fv(index, value);
void gl.vertexAttrib2fv(index, value);
void gl.vertexAttrib3fv(index, value);
void gl.vertexAttrib4fv(index, value);
```

    其中 1，2，3 代表数据的维度，
    f代表为浮点数
    v代表数组


vertexAttribXXf 和 vertexAttribXXfv 函数可以互相转换

```
const a_foobar = gl.getAttribLocation(shaderProgram, 'foobar');
//either set each component individually:
gl.vertexAttrib3f(a_foobar, 10.0, 5.0, 2.0);
//or provide a Float32Array:
const floatArray = new Float32Array([10.0, 5.0, 2.0]);
gl.vertexAttrib3fv(a_foobar, floatArray);
```

https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttrib