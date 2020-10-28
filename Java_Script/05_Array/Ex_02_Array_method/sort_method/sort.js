// Array: Static Method vs Instance Method

// Static Method:

// Array.isArray(); // its static method and its return boolean value is true or false



let numbers = [1, 8, 3, 4, 5, 6, 7, 2, 9, 10, 20];


// Instance Sort();

//numbers.sort();
//console.log('The sorting Number is:', numbers);


//

function sortOrder(x) {
    return x.sort();
}


// using slice to copy

let sortNumbers = numbers.slice(0, numbers.length);
sortOrder(numbers);


console.log('The sorting Number:', numbers);
console.log('The CopyNumber :', sortNumbers);


// Slice() method

const fruits = ['mango', 'banana', 'cherry', 'pineapple', 'apple', 'orange'];


const partOfFruits = fruits.slice(0, fruits.length); // copy to the whole array

console.log('The part of Fruits is', partOfFruits);

fruits.shift();
console.log(fruits);



// Example 1....

let num = [1, 2, 7, 5, 50, 60, 66, 28, 29, 100, 110, 200, 120, 400, 3];


num.sort(function compare(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else {
        return 1;
    }
});

console.log(num);


// Example 2....


// height level come first position
let employees = ['developer', 'CEO', 'MG', 'supervisor'];

employees.sort(function (a, b) {
    if (a == 'MG') {
        return -1;
    }
    if (a == 'CEO' && (b == 'supervisor' || b == 'developer')) {
        return -1;
    }
    if (a == 'supervisor' && b == 'developer') {
        return -1;
    }
});
console.log(employees);


// lowest level come to the first position;


employees.sort(function (a, b) {
    if (a == 'developer') {
        return -1;
    }

    if (a == 'supervisor' && (b == 'CEO' || b == 'MG')) {
        return -1;

    }
    if (a == 'CEO' && b == 'MG') {
        return -1;

    }

});

console.log('The position(lowest to height) is:',
    employees);