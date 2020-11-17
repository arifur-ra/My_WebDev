// 
const car = {
    color: 'red',
    wheel: 4,
    door: 2,
    entries: 1400

}

//car.model = 'ford';

car.model = 'bmw'; // update

//console.log(car.color); // dot notation
//console.log(car[door]); // bracket notation

//delete car['model'];
//console.log(car);

for (key in car) {
    console.log(key, car[key]);
}
// converts keys and values into Array
const objKeys = Object.keys(car);
//console.log(objKeys);
const objValues = Object.values(car);
//console.log(objValues);
const objEntries = Object.entries(car);
//console. log(objtEntries);

//Once converted we can use a normal For loop to access keys and values inside our car object
// for (let i = 0; i < objValues.length; i++) {
//     console.log(objValues[i])
// }
// for (let i = 0; i < objKeys.length; i++) {
//     console.log(objKeys[i])
// }
// for (let i = 0; i < objEntries.length; i++) {
//     console.log(objEntries[i][1])
// }

// copying the object or arry whatever like this way
const car2 = {
    ...car
};
car.entries = 1800;

//console.log(car2);

const person = {
    name: 'Arif',
    age: 25
};

const combine = {
    ...car,
    ...person,
    lastName: 'Rahman'
};
console.log(combine)