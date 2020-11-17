// using Arrow function
const numbers = [10, 5, 2, 7, 8, 14, 25];

let maximumNumber = array => {
    let max = 0;
    // can be  let max=array[0];// checking the first index of array;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
};

console.log(` The Maximum Number is:${maximumNumber(numbers)}`);

// Another way to solved
let maxOf = array => Math.max(...array);
console.log(` The Maximum Number is:${maxOf(numbers)}`);