/**Math is a built-in object that has properties and methods for mathematical constants and functions. 
It’s not a function object.
Math works with the Number type. It doesn't work with BigInt.
*/


const num1 = 100;
const num2 = 50;

let result;

// Simple math with number;

result = num1 + num2;
result = num1 * num2;
result = num1 - num2;
result = num1 / num2;
result = num1 % num2;



// Math Object

/**
 * there is no constructor Math() provided with Math
 * i.e no instances
 */
// Math properties
result = Math.PI;
result = Math.E;



// Math Methods()

result = Math.round(2.4);
//expected result 2
result = Math.ceil(2.1);
//expected result 3

result = Math.floor(2.99999);
//expected result 2
result = Math.sqrt(64);
//expected result 8

result = Math.pow(8, 2);
//expected result 64;
result = Math.abs(-10);
//expected result 10;

result = Math.sign(-10);
//expected result -1;

result = Math.max(-10, 4, 1, 800);
//expected result 800;

result = Math.min(-10, 4, 1, 800);
//expected result -10;

result = Math.random();
//expected result :random number between 0 and 1;

result = Math.floor(Math.random() * 20 + 1);
//expected result :random number between 1 and 20,  exclude 0;


console.log(result);