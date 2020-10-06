// Global variables...
let display = document.getElementById('display');
let cool = document.getElementById('cool');
let bad = document.getElementById('bad');
cool.style.display = 'none';
bad.style.display = 'none';


let result;
let x, y, z;

// Numbers operators

x = 16;
y = 7;
z = 20;

// + , - ,/,*  operator
result = x + y;
result = x - y;
result = x * y;

// Boolean True or false Operator

x = true;
y = false;
z = true;

// && , ||   Logical operator
// AND Logical operator
result = x && y; //true and false: false
result = y && x; // false and true : false
result = x && z;
result = y && y;

//OR '||'logical operator

result = x || y; //true or false: True
result = y || x; // false or True: True
result = x || z; // true or true: True
result = y || y; // false or false : false

// NOT !
result = !x; // 'result' would be not NOT value of 'x'

// Example usage of logical values 

if (!z) {
    result = `Yes,It's accepted!!`;
    cool.style.display = 'inline-block';
} else {
    result = `No, It's rejected `;
    bad.style.display = 'inline-block';

}
// Developer Log
display.innerHTML = result;
// console.log(display.innerHTML);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// console.log(typeof result);
// console.log(!z);



// String Operator and Method
// general String variables
let firstNameLabel = document.getElementById('firstName');
let lastNameLabel = document.getElementById('lastName');
let fullName = document.getElementById('fullName');
let greeting = document.getElementById('greeting');

// get input
let firstNameInput = document.getElementById('first');
let lastNameInput = document.getElementById('last');
let gender = document.getElementById('gender');
//let genderFemale = document.getElementById('female');

// local Variables
let firstName = 'Arifur';
secondName = 'Rahman';
let male = 'Mr.';
let female = 'Mrs.'
let salutation;

// define a string accepts 'javascript' inside

salutation = ` ${gender} ${firstName} ${secondName}`;

//concatenation
//salutation = 'Hello ' + male + ' ' + firstName + ' ' + secondName;

// greeting the Name

function printName(event) {
    event.preventDefault();
    // let gender = 'Mrs';
    // if (male.checked) {
    //     gender = 'Mr.';
    // }

    greeting.innerHTML = ` <h1> I'm ${gender.value} ${firstNameInput.value} ${lastNameInput.value} </h1>`;
    greeting.style.background = 'lightGreen';
    greeting.style.padding = '1rem';
    greeting.style.borderRadius = '.5rem';

}
// developer log

console.log(salutation);
greeting.innerHTML = firstNameInput.value + ' ' + lastNameInput.value;