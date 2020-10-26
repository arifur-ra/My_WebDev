// Array method

// Array.unshift    // adding the value is at the beggining of array
let animals = ['dog', 'cat', 'rat', 'deer'];

newlength = animals.unshift('bird');
console.log('The new array after adding new element using unshift:', animals);
console.log('The new length adding the element using unshift:', newlength);





// indexOf : will return the first  index of the element in the array equal to an element or -1 if not found

let carBrands = ['volkswagen', 'audi', 'bmw', 'porsche', 'jaguar', 'renault'];

let indexOfElement = carBrands.indexOf('porsche');
console.log(`The Index of Porsche: ${indexOfElement}`);



// pop : will delete the last element of the array

let deleteElements = [];

let deletedElement = carBrands.pop();
// adding the deleted element from carBrands to the array deletedElements
deleteElements.unshift(deletedElement);
console.log('The initail element for Car Brands:', carBrands);
let newcarlength = carBrands.pop()
console.log('The New car Array after using pop',
    carBrands);
console.log(deleteElements);

// shift: it will delete the first element from the array and return 

// deletedElement = carBrands.shift();
// deletedElement.unshift(deletedElement);
// console.log(carBrans);