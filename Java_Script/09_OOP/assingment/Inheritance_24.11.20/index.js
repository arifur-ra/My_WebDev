// Inheritance

// Super Type: Father Type

function Shape(x, y) {
    this.x = x;
    this.y = y;
}

Shape.prototype = {
    move(extX, extY) {
        this.x += extX;
        this.y += extY;

    }
};

// Sub Type : the Child Type

function Circle(x, y, r) {
    // Call  The constructor of the super:Father Type

    Shape.call(this, x, y);
    // initialize sub type : child own props
    this.r = r;
}

// using father prototype
Circle.prototype = Object.create(Shape.prototype);

// New Methods

Circle.prototype.area = function () {
    this.area = Math.round(this.r * this.r * Math.PI);

}

let shape = new Shape(1, 2);
console.log(shape);
let cir = new Circle(5, 6, 4);
cir.area();
console.log(cir);

cir.move(4, 4);
console.log(cir);