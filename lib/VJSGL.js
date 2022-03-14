/*
    @TODO
    Key Input
    Shape Outline or Fill functions
    Gradient constructor
    Background - half done
    Entity class
    Colors
*/

function getCanvas() {
    const canvas = document.getElementById("myCanvas");
    return canvas;
}

function getCtx() {
    const c = getCanvas();
    const ctx = c.getContext("2d");
    return ctx;
}

function setBackgroundColor() {
    let c = getCanvas();
    let width = c.width;
    let height = c.height;
    let ctx = getCtx();
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, width, height);

}

function drawCircle(x, y, radius) {
    let ctx = getCtx();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.stroke();
}

function drawRect(x, y, width, height) {
    let ctx = getCtx();
    ctx.beginPath();
    ctx.fillRect(x, y, width, height);
}

function drawGradientRect(gradient) {
    let ctx = getCtx();
    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 10, 150, 80);
}

function drawLine(x1, y1, x2, y2) {
    let ctx = getCtx();
    ctx.moveTo(x1, y2);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawText(text) {
    let ctx = getCtx();
    ctx.font = "30px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(text, 10, 50);
}

function drawStrokeText(text) {
    let ctx = getCtx();
    ctx.font = "30px Arial";
    ctx.strokeText(text, 10, 50);
}

function drawImage(image) {
    let ctx = getCtx();
    let img = document.getElementById(image);
    ctx.drawImage(img, 10, 10);
}

class Gradient {
    constructor() {
    }

    getGradient() {
        var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");
        return grd;
    }

}

