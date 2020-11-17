//............array.map().................../


// normal function
function name(param) {
    // here is the code
}

// arrow function
let arrowName = (x, y) => {
    // here is the code
    return x + y;
};
console.log(arrowName(10, 20));


// if I have one Parameter and one statement

const square = a => a * a;

console.log(square(6));

// if I have one Parameter and multi statement

const addOne = x => {
    let r = 1;
    return x + r;
};
console.log(addOne(16));


// if I have multi Parameter and one statement

const someOFNumber = (m, n) => m + n;
console.log(someOFNumber(40, 30));

// No parameter and one statement
const logMe = () => ' My Name is Arif';
console.log(logMe());

// multi parameter and multi statement;

const multiNum = (p, q, r) => {
    let result = q + r * 10;
    return p * result;

};

console.log(multiNum(1, 2, 1))