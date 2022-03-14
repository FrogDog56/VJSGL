function drawCircle() {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function drawLine(x, y) {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drawText(text) {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(text, 10, 50);
}