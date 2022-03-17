/*
    Library written by Kieran Whelan
    This is free software provided under the apache 2.0 license
*/

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

function getCanvas() {
    const canvas = document.getElementById("myCanvas");
    return canvas;
}

function getCtx() {
    let c = getCanvas();
    const ctx = c.getContext("2d");
    return ctx;
}

function getWidth() {
    let c = getCanvas();
    return c.width;
}

function getHeight() {
    let c = getCanvas();
    return c.height;
}

function clearCanvas() {
    let c = getCanvas();
    let ctx = getCtx();
    ctx.clearRect(0, 0, getWidth(), getHeight());
}

class Registry {
    constructor() {
        this.registry = [];
    }

    register(item) {
        this.registry.push(item.instance);
    }

    updateFrame() {
        clearCanvas();
        for(let i = 0; i < this.registry.length; i++) {
            this.registry[i].update();
        }
    } 
}

class Item {
    constructor() {}

    update() {
        this.draw();
    }

    get instance() {
        return this;
    }
}

class Background extends Item {
    constructor(colour) {
        super();
        this.colour = colour;
    }

    draw() {
        let ctx = getCtx();
        ctx.beginPath();
        ctx.fillStyle = this.colour.getHexCode();
        ctx.fillRect(0, 0, getWidth(), getHeight());
        ctx.closePath();
    }
}

class Circle extends Item {
    constructor(x, y, radius, speed) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xs = speed;
        this.ys = speed;
    }

    draw() {
        let ctx = getCtx();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
}

class Rectangle extends Item {
    constructor(x, y ,width, height, speed) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xs = speed;
        this.ys = speed;
    }

    draw() {
        let ctx = getCtx();
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}

class Line extends Item {
    constructor(x1, y1 ,x2, y2) {
        super();
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    draw() {
        let ctx = getCtx();
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        ctx.closePath();
    }
}

class FillText extends Item {
    constructor(x, y, string, font, size, colour) {
        super();
        this.x = x;
        this.y = y;
        this.string = string;
        this.font = font;
        this.size = size;
        this.colour = colour;
    }

    draw() {
        let ctx = getCtx();
        ctx.font =  this.size + "px " + this.font;
        ctx.fillStyle = this.colour.getHexCode();
        ctx.fillText(this.string, this.x, this.y);
    }
}

class StrokeText extends Item {
    constructor(x, y, string, font, size, colour) {
        super();
        this.x = x;
        this.y = y;
        this.string = string;
        this.font = font;
        this.size = size;
        this.colour = colour;
    }

    draw() {
        let ctx = getCtx();
        ctx.font =  this.size + "px " + this.font;
        ctx.fillStyle = this.colour.getHexCode();
        ctx.strokeText(this.string, this.x, this.y);
    }
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

class Colour {
    constructor(label, hexCode) {
        this.label = label;
        this.hexCode = hexCode;
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

class Key {
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
