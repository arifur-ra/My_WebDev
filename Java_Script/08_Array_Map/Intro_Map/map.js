// Array.prototype.map()

// with forEach()
let numbers = [10, 25, 39];
// let newArray = [];
// numbers.forEach((element, i, arr) => {
//     // arr[i] = element * 2;
//     newArray.push(element * 2);

// });

// with Map() more flexible to use

//let newArray = numbers.map(element => element * 2);
console.log(numbers);
//console.log(newArray);

/**
 * * create two inputs
 * first input will be for adding names , every value will be pushed to the names array.
 * second input will be for the professions  ,  every value will be added to the professions array.
 *
 * create a button , add to every name  using map loop , a profession randomly , 
 * and save the result in a new generated array .
 * show the list of namesProfessions  in an unordered list, using forEach loop
 */

let name = document.getElementById('name').value;
let profession = document.getElementById('profession').value;
let display = document.getElementById('display');
let names = [];
let professions = [];
let newArray = [];



function addingData() {
    names.push(name);
    professions.push(profession);
    names.pop();
    professions.pop();
    console.log(newArray);

    display.innerHTML = '';

    newArray.forEach((element, index) => {
        display.innerHTML += `<tr>${element}</tr>`
    });
    //displayData(newArray);
    display.innerHTML = newArray;
}