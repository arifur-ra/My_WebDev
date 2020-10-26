// Array.push  // its adding the value at the end of the array

let animals = ['dog', 'cat', 'rat', 'deer'];
console.log(' The initial array:', animals);


let newlength = animals.push('goat');
console.log('The new array after adding new element using push:',
    animals);
console.log('The new length adding the element using unshift:', newlength);



//

let lessThanTen = [];
let arrayOfNumbers = [1, 2, 19, 52, 6, 11, 3, 8, 10];

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < 10) {
        lessThanTen.push(arrayOfNumbers[i]);
    }
}

console.log(lessThanTen);
// Another way to solving
// Using function

function lessThan(array) {
    let lessThanTen = [];
    for (let i = 0; i < array.length; i++) {

        if (array[i] > 10) {
            lessThanTen.push(array[i]);
        }

    }

    return lessThanTen;

}

document.write(` The Value is :${lessThan([1, 2, 19, 52, 6, 11, 3, 8, 10])}`);