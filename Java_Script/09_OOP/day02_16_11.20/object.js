// object is a reference type

let string = 'hello world';

let person = {
    name: 'Arif',
    age: 30
};

let human = person;



// the order of the properties in the object

let array = ['apple', 'banana', 'orange', 'mango'];
console.log(array);
let fruits = {
    0: 'apple',
    1: 'orange',
    2: 'mango',
    3: 'banana',
    4: 'berry'
};
console.log(fruits);



// looping in the object
// arrow function to find a key and delete property

const deleteAgePro = (key, obj) => {
    for (let index in object) {
        if (index == key) {
            return delete obj[index];
        }
    }

    return -1;
};

let object = {
    'name': 'Gerhard',
    'age': '55',
    'profession': 'Web-Dev',
    'favorite': ['cricket', 'football', 'billiard']
};

let prop = 'age';

console.log(deleteAgePro(prop, object), object);