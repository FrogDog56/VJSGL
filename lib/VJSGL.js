/*
    Library written by Kieran Whelan
    This is free software provided under the apache 2.0 license
*/

/*
    @TODO
    Shape Outline or Fill functions
    Gradient constructor
    Colors - started
    Error checking - types
*/
/*

/* some basic canvas functions that are used throughout the library */
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

let keysDown = [];

const Keyboard = {
    init : function() {
        window.addEventListener("keydown", this.addKey, false);
        window.addEventListener("keyup", this.removeKey, false);
    },

    addKey : function (key) {
        keysDown.push(key.keyCode);
    },

    removeKey : function (key) {
        for (let i = 0; i < keysDown.length; i++) {
            if (key.keyCode === keysDown[i]) {
                delete keysDown[i];
            }
        } 
    },

    isKeydown : function (key) {
        if (typeof key !== typeof 10) {
            throw "function isKeydown(key) requires a valid Key";
        } else {
            if (keysDown.includes(key , 0)) {
                return true;
            } else {
                return false;
            }
        }
    }
}

const Key = {
    backspace : 8,
    tab : 9,
    enter : 13,
    shift : 16,
    ctrl : 17,
    alt : 18,
    pauseBreak : 19,
    capsLock : 20,
    escape : 27,
    space : 32,
    pageUp : 33,
    pageDown : 34,
    end : 35,
    home : 36,
    leftArrow : 37,
    upArrow : 38,
    rightArrow : 39,
    downArrow : 40,
    insert : 45,
    delete : 46,
    zero : 48,
    one : 49,
    two : 50,
    three : 51,
    four : 52,
    five : 53,
    six : 54,
    seven : 55,
    eight : 56,
    nine : 57,
    a : 65,
    b : 66,
    c : 67,
    d : 68,
    e : 69,
    f : 70,
    g : 71,
    h : 72,
    i : 73,
    j : 74,
    k : 75,
    l : 76,
    m : 77,
    n : 78,
    o : 79,
    p : 80,
    q : 81,
    r : 82,
    s : 83,
    t : 84,
    u : 85,
    v : 86,
    w : 87,
    x : 88,
    y : 89,
    z : 90,
    leftWindows : 91,
    rightWindows : 92,
    select : 93,
    numpad0 : 96,
    numpad1 : 97,
    numpad2 : 98,
    numpad3 : 99,
    numpad4 : 100,
    numpad5 : 101,
    numpad6 : 102,
    numpad7 : 103,
    numpad8 : 104,
    numpad9 : 105,
    multiply : 106,
    add : 107,
    subtract : 109,
    decimal : 110,
    divide : 111,
    f1 : 112,
    f2 : 113,
    f3 : 114,
    f4 : 115,
    f5 : 116,
    f6 : 117,
    f7 : 118,
    f8 : 119,
    f9 : 120,
    f10 : 121,
    f11 : 122,
    f12 : 123,
    numLock : 144,
    scrollLock : 145,
    semiColon : 186,
    equals : 187,
    comma : 188,
    dash : 189,
    period : 190,
    forwardSlash : 191,
    graveAccent : 192,
    openBracket : 219,
    backSlash : 220,
    closeBracket : 221,
    singleQuote : 222,
}

const Colours = {
    red : "#FF0000",
    blue : "#0000FF",
    green : "#00FF00",
    white : "#FFFFFF",
    black : "#000000",
    yellow : "#FFFF00",
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
    
    isCollide(item1, item2) {
        if (item1.x < item2.x + item2.width 
            && item1.x + item1.width > item2.x
            && item1.y < item2.y + item2.height 
            && item1.height + item1.y > item2.y) 
        {
            return true;
        } else {
            return false;
        }
    }
}

/* all new items need x, y, width and height */
class Item {
    constructor() {}

    update() {
        this.draw();
    }

    get instance() {
        return this;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    set x(value) {
        this._x = value; 
    }

    set y(value) {
        this._y = value; 
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }
}

class Background extends Item {
    constructor(image) {
        super();
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.width = getWidth();
        this.height = getHeight();
    }

    draw() {
        let ctx = getCtx();
        ctx.beginPath();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}

class BackgroundFill extends Item {
    constructor(colour) {
        super();
        this.colour = colour;
        this.x = 0;
        this.y = 0;
        this.width = getWidth();
        this.height = getHeight();
    }

    draw() {
        let ctx = getCtx();
        ctx.beginPath();
        if (typeof this.colour === typeof Colours.red) {
            ctx.fillStyle = this.colour;
        } else {
            ctx.fillStyle = this.colour.hexCode;
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}

class SpriteItem extends Item {
    constructor() {
        super();
    }

    moveLeft(speed) {
        if (speed != null) {
            if (typeof speed != typeof 10) {
                throw "the optional field speed must be a number";
            } else {
                this.x -= speed;
            }
        } else {
            this.x -= this.xs;
        }
    }

    moveRight(speed) {
        if (speed != null) {
            if (typeof speed != typeof 10) {
                throw "the optional field speed must be a number";
            } else {
                this.x += speed;
            }
        } else {
            this.x += this.xs;
        }
    }

    moveUp(speed) {
        if (speed != null) {
            if (typeof speed != typeof 10) {
                throw "the optional field speed must be a number";
            } else {
                this.y -= speed;
            }
        } else {
            this.y -= this.ys;
        }
    }

    moveDown(speed) {
        if (speed != null) {
            if (typeof speed != typeof 10) {
                throw "the optional field speed must be a number";
            } else {
                this.y += speed;
            }
        } else {
            this.y += this.ys;
        }
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Circle extends SpriteItem {
    constructor(x, y, radius, speed) {
        super();
        this.x = x;
        this.y = y;
        this.width = radius * 2;
        this.height = radius * 2;
        this.radius = radius;
        this.xs = speed;
        this.ys = speed;
    }

    draw() {
        let ctx = getCtx();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
}

class Rectangle extends SpriteItem {
    constructor(x, y, width, height, speed) {
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
        ctx.fillStyle = Colours.black;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}

class Sprite extends SpriteItem {
    constructor(image, x, y, width, height, speed) {
        super();
        this.image = image;
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
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}

class Line extends Item {
    constructor(x1, y1 ,x2, y2) {
        super();
        this.x = x1;
        this.y = x2;
        this.width = x1 - x2;
        this.height = y1 - y2;
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
        ctx.fillStyle = this.colour.hexCode;
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
        ctx.fillStyle = this.colour.hexCode;
        ctx.strokeText(this.string, this.x, this.y);
    }
}

class Timer {
    constructor(time) {
        this.time = time * 60;
        this.timer = time * 60;
        this.active = false
    }

    start() {
        this.active = true;
        this.timer = 0;
    }

    stop() {
        this.active = false;
    }

    reset() {
        this.timer = 0;
    }

    isOver() {
        if (this.timer >= this.time) {
            return true;
        }
        return false;
    }

    update() {
        if (this.active) {
            this.timer++;
        }
    }

    get instance() {
        return this;
    }

    get time() {
        return this._time;
    }

    get timer() {
        return this._timer;
    }

    set time(value) {
        this._time = value;
    }

    set timer(value) {
        this._timer = value;
    }
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

    get hexCode() {
        return this._hexCode;
    }

    set hexCode(value) {
        this._hexCode = value;
    }
}
