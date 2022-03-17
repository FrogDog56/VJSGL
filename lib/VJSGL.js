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

let keys = [];

function init() {
    window.addEventListener("keydown", addKey, false);
}

function addKey(key) {
    if (keys.includes(key.keyCode, 0)) {
        return
    } else {
        keys.push(key.keyCode);
    }
}

function isKeydown(key) {
    if (keys.includes(key.code , 0)) {
        return true;
    } else {
        return false;
    }
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
        keys = [];
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

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(value) {
        this.x = value; 
    }

    setY(value) {
        this.y = value; 
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
        ctx.fillStyle = this.colour.hex;
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
        ctx.fillStyle = this.colour.hex;
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
        ctx.fillStyle = this.colour.hex;
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

    get gradient() {
        var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");
        return grd;
    }

}

class Colour {
    constructor(hexCode) {
        this.hexCode = hexCode;
    }

    get hex() {
        return this.hexCode;
    }
}

const red = new Colour("#FF0000");
const green = new Colour("#00FF00");
const blue = new Colour("#0000FF");
const white = new Colour("#FFFFFF");
const black = new Colour("#000000");

class Key {
    constructor(keyCode) {
        this.keyCode = keyCode;
    }

    get code() {
        return this.keyCode;
    }
}

const KEY_BACKSPACE = new Key(8);
const KEY_TAB = new Key(9);
const KEY_ENTER = new Key(13);
const KEY_SHIFT = new Key(16);
const KEY_CTRL = new Key(17);
const KEY_ALT = new Key(18);
const KEY_PAUSEBREAK = new Key(19);
const KEY_CAPSLOCK = new Key(20);
const KEY_ESCAPE = new Key(27);
const KEY_PAGEUP = new Key(33);
const KEY_PAGEDOWN = new Key(34);
const KEY_END = new Key(35);
const KEY_HOME = new Key(36);
const KEY_LEFTARROW = new Key(37);
const KEY_UPARROW = new Key(38);
const KEY_RIGHTARROW = new Key(39);
const KEY_DOWNARROW = new Key(40);
const KEY_INSERT = new Key(45);
const KEY_DELETE = new Key(46);
const KEY_0 = new Key(48);
const KEY_1 = new Key(49);
const KEY_2 = new Key(50);
const KEY_3 = new Key(51);
const KEY_4 = new Key(52);
const KEY_5 = new Key(53);
const KEY_6 = new Key(54);
const KEY_7 = new Key(55);
const KEY_8 = new Key(56);
const KEY_9 = new Key(57);
const KEY_A = new Key(65);
const KEY_B = new Key(66);
const KEY_C = new Key(67);
const KEY_D = new Key(68);
const KEY_E = new Key(69);
const KEY_F = new Key(70);
const KEY_G = new Key(71);
const KEY_H = new Key(72);
const KEY_I = new Key(73);
const KEY_J = new Key(74);
const KEY_K = new Key(75);
const KEY_L = new Key(76);
const KEY_M = new Key(77);
const KEY_N = new Key(78);
const KEY_O = new Key(79);
const KEY_P = new Key(80);
const KEY_Q = new Key(81);
const KEY_R = new Key(82);
const KEY_S = new Key(83);
const KEY_T = new Key(84);
const KEY_U = new Key(85);
const KEY_V = new Key(86);
const KEY_W = new Key(87);
const KEY_X = new Key(88);
const KEY_Y = new Key(89);
const KEY_Z = new Key(90);
const KEY_LEFTWINDOWS = new Key(91);
const KEY_RIGHTWINDOWS = new Key(92);
const KEY_SELECT = new Key(93);
const KEY_NUM0 = new Key(96);
const KEY_NUM1 = new Key(97);
const KEY_NUM2 = new Key(98);
const KEY_NUM3 = new Key(99);
const KEY_NUM4 = new Key(100);
const KEY_NUM5 = new Key(101);
const KEY_NUM6 = new Key(102);
const KEY_NUM7 = new Key(103);
const KEY_NUM8 = new Key(104);
const KEY_NUM9 = new Key(105);
const KEY_MULTIPLY = new Key(106);
const KEY_ADD = new Key(107);
const KEY_SUBTRACT = new Key(109);
const KEY_DECIMAL = new Key(110);
const KEY_DIVIDE = new Key(111);
const KEY_F1 = new Key(112);
const KEY_F2 = new Key(113);
const KEY_F3 = new Key(114);
const KEY_F4 = new Key(115);
const KEY_F5 = new Key(116);
const KEY_F6 = new Key(117);
const KEY_F7 = new Key(118);
const KEY_F8 = new Key(119);
const KEY_F9 = new Key(120);
const KEY_F10 = new Key(121);
const KEY_F11 = new Key(122);
const KEY_F12 = new Key(123);
const KEY_NUMLOCK = new Key(144);
const KEY_SCROLLLOCK = new Key(145);
const KEY_SEMICOLON = new Key(186);
const KEY_EQUALS = new Key(187);
const KEY_COMMA = new Key(188);
const KEY_DASH = new Key(189);
const KEY_PERIOD = new Key(190);
const KEY_FORWARDSLASH = new Key(191);
const KEY_GRAVEACCENT = new Key(192);
const KEY_OPENBRACKET = new Key(219);
const KEY_BACKSLASH = new Key(220);
const KEY_CLOSEBRACKET = new Key(221);
const KEY_SINGLEQUOTE = new Key(222);
