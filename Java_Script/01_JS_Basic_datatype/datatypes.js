// Different datatype
/** Two type of Datatype
 * primitive  dataType
 * reference or object dataType
 */

/**primitive */
let a = 10;
console.log(typeof a, a);

let b = a;
console.log(typeof b, b);
a = 11;
console.log(a, b);

/** PRIMITIVE*/
// String

let firstName = 'Arifur Rahman';
let lastName = "Arif";
let fullName = ` ${firstName} ${lastName}`;
console.log(typeof fullName, `My Full Name:${fullName}`);
// Number
let age = 30;
console.log(typeof age, ` My age is ${age}`);

// Boolean 
let hasWife = false;
let hasKids = hasWife;
hasWife = true;
console.log(typeof hasKids, hasWife);

// Undefined

let test;
console.log(typeof test, test);
let crazy = test;
text = 'HTML';
console.log(typeof crazy, crazy);

// Null 

let car = null;
console.log(typeof car, car);
let bus = car;
bus = 'BMW';
console.log(typeof bus, bus);
console.log(typeof car, car);


/**-----reference or object Type ------*/

let c = [1, 2, 3]
console.log(typeof c, c);

let d = c;
console.log(typeof d, d);

c[0] = 10;
console.log(c, d);

/**----- Reference (object) */
// Array

const students = ['Arif', 39, {
    age: 30,
    profession: 'Web-developer'
}];
console.log(`${typeof students}`,
    students);

students[1] = "lets make a lunch break";
students[2] = "having lunch"

console.log(`${typeof students}`,
    students);
console.log(students[1]);

// Object

let personOne = {};
console.log(typeof personOne, personOne);
let personTwo = personOne;
console.log(typeof personTwo, personTwo);

personOne.name = 'Arif'
personTwo.age = 30;