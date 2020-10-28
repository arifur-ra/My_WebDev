// Array: Static Method vs Instance Method


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Static Method:

// Array.isArray(); // its static method and its return boolean value is true or false


console.log(Array.isArray('Bob-Marley'));
console.log(Array.isArray(numbers));








// Instance Method:

numbers.reverse();
console.log(numbers);