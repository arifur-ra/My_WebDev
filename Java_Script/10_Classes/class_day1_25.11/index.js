// using OOP Prototype

/*function Greet() {

}
Greet.prototype.setGreetPhrase = function (phrase) {
    this.phraseWord = phrase;
};

Greet.prototype.greet = function () {
    document.write(`${this.phraseWord} FBW39`);
};



let morning = new Greet();
morning.setGreetPhrase('Good evening');
morning.greet();*/


// Using Classes
class Greet {

    //   creating constructor function
    constructor(phrase) {
        this.phraseWord = phrase;
    }
    // add method to the prototype
    setGreetPhrase(phrase) {
        this.phraseWord = phrase;
    }

    greet() {
        document.write(`${this.phraseWord} FBW39`);
    }

}

let morning = new Greet('Good morning');
morning.greet();


morning.setGreetPhrase('Arif');
morning.greet();
console.log(morning);


// ...................ES6 class: Inheritance ....................
// Super 'Parents' class Type

class Shape {
    constructor(x, y) {
        this.h = x;
        this.v = y;
    }

    move(extX, extY) {
        this.h += extX;
        this.v += extY;
    }
}

let shape = new Shape(5, 6);
shape.move(4, 6);

console.log(shape);

// Sub 'child', 'class' Type
class Circle extends Shape {
    constructor(x, y, r) {
        super(x, y); // inheritance to the Parents constructor Shape
        this.r = r;
    }
    // overwrite method
    move(x, y) {
        this.h *= x;
        this.v *= y;
    }

    //new methods

    area() {
        return this.r * this.r * Math.PI;
    }
}

let cir = new Circle(7, 3, 2);
console.log(cir)
cir.move(2, 4);
console.log(cir);

console.log('The Area is:',
    cir.area());