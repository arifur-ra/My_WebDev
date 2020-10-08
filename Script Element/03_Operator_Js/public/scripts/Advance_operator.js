// Global Variables
let firstName = 'Arifur';
let lastName = 'Rahman';
let age = 30;
const profile = `Hello, My Name is :${firstName} ${lastName}
and My Age :${age}`;
const skills = 'javaScript,CSS,HTML,GitHub,Bootstrap';

let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let pAge = document.getElementById('age');
let cv = document.getElementById('profile');
let tages = document.getElementById('skills');

let test = document.getElementById('test');

let string;
let val;

string = firstName + ' ' + lastName;
string = firstName.concat(' ', lastName);
//append
// test.innerHTML = firstName;
// // test.innerHTML = test.innerHTML + '  ' + lastName;
// test.innerHTML += ' ' + lastName;

// fName.innerHTML = firstName;
// lastName.innerHTML = lastName;
// pAge.innerHTML = age;
// cv.innerHTML = profile;
// tages.innerHTML = skills;

// Escaping  character using \'bach slash'\

string = 'That\'s awesome, I can\'t wait';


// seeing the length
val = string.length;

// seeing last character position
val = string[string.length - 1];
val = string.split(' ');

let skillsA = skills.split(',');
console.table(skillsA);


// Substring()
// first index include but last index not
val = lastName.substring(0, 3);


//search() method
// 
string = 'That is nice'
let index = string.search('nice');
console.log(string[index]);
// val = string.substring(string.search('nice'), string.search('nice') + 4);
val = string.substring(index, index + 4);
console.log(val);
console.log(index);


// Replace()  replace the new value.

let originalString = 'That is nice ';
let searchString = 'nice';
let replaceString = 'awesome';
let returnString = '';


returnString = originalString.replace(searchString, replaceString);

// console.log(`The origin String: ${originalString}`);
// console.table(`The Replace String: ${returnString}`);


//replaceALl()

originalString = 'Hello Fbw39 awesome awesome team ';
searchString = 'awesome';
replaceString = 'nice';
returnString = '';


returnString = originalString.replace(searchString, replaceString);

console.log(`The origin String: ${originalString}`);
console.log(`The Replace String: ${returnString}`);


//  
let Persons = 'Arif, Adam, Matheus, Manon, Jon, Gabor';

function isNameHere(name, text) {
    // String method includes()
    // return boolean value true, false;

    return text.includes(name);
}
let answer = isNameHere('Saima', Persons);

console.log(answer);




//developer log
// console.log(string);
// console.table(val);
test.innerHTML = string;