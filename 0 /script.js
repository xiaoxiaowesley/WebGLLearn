
function main() {
    //或者canvas元素
    const canvas = document.getElementById("glcanvas");
    //获取webgl上下文变量
    const gl = canvas.getContext("webgl");
    if (!gl) {
        alert('WebGL initialize failed.')
        return;
    }
    //用tiffany蓝（129,216,208）作为清除颜色
    gl.clearColor(129 / 255, 216 / 255, 208 / 255, 1.0);
    //清除颜色缓冲区。
    gl.clear(gl.COLOR_BUFFER_BIT);
}