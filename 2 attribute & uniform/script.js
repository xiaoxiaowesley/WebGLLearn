
function main() {

    const canvas = document.getElementById("glcanvas");
    const gl = canvas.getContext("webgl");
    if (!gl) {
        alert('WebGL initialize failed.')
        return;
    }

    //顶点着色器代码
    const vertex_shader = `
    attribute vec4 input_Position;
    void main()
    {
        gl_Position = input_Position;
        gl_PointSize = 10.0;
    }
    `;

    //片元着色器代码
    const fragment_shader = `
    void main()
    {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    `;

    //着色器
    //创建程序（用于编译运行）
    const program = gl.createProgram();
    //创建顶点着色器
    var vShader = gl.createShader(gl.VERTEX_SHADER);
    //创建片元着色器
    var fShader = gl.createShader(gl.FRAGMENT_SHADER);
    //顶点/片元着色器绑定代码
    gl.shaderSource(vShader, vertex_shader);
    gl.shaderSource(fShader, fragment_shader);
    //编译顶点/片元着色器
    gl.compileShader(vShader);
    gl.compileShader(fShader);
    //将着色器附着到程序上
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);

    //连接
    gl.linkProgram(program);
    //加载并使用链接好的程序
    gl.useProgram(program);

    //往顶点着色器传递数据
    var input_position_Index = gl.getAttribLocation(program, 'input_Position');
    const point_position = [
        0.5,
        0.5,
        0.5
    ];
    gl.vertexAttrib3f(input_position_Index, point_position[0], point_position[1], point_position[2]);

    //清除颜色缓冲区。用黑色（0,0,0）
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    //绘制一个点
    gl.drawArrays(gl.POINTS, 0, 1);
}