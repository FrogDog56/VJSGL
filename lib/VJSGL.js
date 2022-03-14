/*
    @TODO
    Key Input
    Shape Outline or Fill functions
    Gradient constructor
    Background - half done
    Entity class
    Colors - started
    Error checking
*/

function init() {
    document.addEventListener('keydown', function(event) {
        alert(event.keyCode);
    });
}

function getCanvas() {
    const canvas = document.getElementById("myCanvas");
    return canvas;
}

function getCtx() {
    let c = getCanvas();
    const ctx = c.getContext("2d");
    return ctx;
}

function keyListener() {
    let c = getCanvas();
}

function setBackgroundColour(colour) {
    let c = getCanvas();
    let width = c.width;
    let height = c.height;
    let ctx = getCtx();
    ctx.beginPath();
    ctx.fillStyle = colour.getHexCode();
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
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawText(x, y, text, font, size, colour) {
    let ctx = getCtx();
    ctx.font =  size + "px " + font;
    ctx.fillStyle = colour.getHexCode();
    ctx.fillText(text, x, y);
}

function drawStrokeText(x, y, text, font, size, colour) {
    let ctx = getCtx();
    ctx.font =  size + "px " + font;
    ctx.fillStyle = colour.getHexCode();
    ctx.strokeText(text, x, y);
}

function drawImage(image) {
    let ctx = getCtx();
    let img = document.getElementById(image);
    ctx.drawImage(img, 10, 10);
}

class Error {
    constructor() {

    }
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

class Colour {
    constructor(label, hexCode) {
        this.label = label;
        this.hexCode = hexCode;
    }

    getLabel() {
        return this.label;
    }

    getHexCode() {
        return this.hexCode;
    }
}

const red = new Colour("red", "#FF0000");
const green = new Colour("green", "#00FF00");
const blue = new Colour("blue", "#0000FF");
const white = new Colour("white", "#FFFFFF");
const black = new Colour("black", "#000000");

class Keyboard {

}

class Key extends Keyboard {
    constructor(label, keyCode) {
        this.label = label;
        this.keyCode = keyCode;
    }

    getLabel() {
        return this.label;
    }

    getKeyCode() {
        return this.keyCode;
    }
}

const KEY_0 = new Key("KEY_0", 48);
const KEY_1 = new Key("KEY_1", 49);
const KEY_2 = new Key("KEY_2", 50);
const KEY_3 = new Key("KEY_3", 51);
const KEY_4 = new Key("KEY_4", 52);
const KEY_5 = new Key("KEY_5", 53);
const KEY_6 = new Key("KEY_6", 54);
const KEY_7 = new Key("KEY_7", 55);
const KEY_8 = new Key("KEY_8", 56);
const KEY_9 = new Key("KEY_9", 57);


