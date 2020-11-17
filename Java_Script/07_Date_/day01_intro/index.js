// 

//instance  I can use  them  with any instance
//static only with the original object

const x = new Array(1, 2, 3, 4); // same like[1,2,3,4]
const y = new Date();
// static method
//Date.now() its return milliseconds since since jan 1,1970
let startTime = Date.now();
document.write(startTime);

// instance methods :used with any instance

const birthdayDate = new Date('Sun Nov 1 2015  18:25:10');
document.write(`<br>`);

document.write(birthdayDate);

const dayOfBirth = birthdayDate.getDate(); // its return a day of month in local time and return between 1 and 31
document.write(`<br>`);
document.write(dayOfBirth);

// getDay():get day of week,0 to 6; Sunday to Saturday;

const dayofWeek = birthdayDate.getDay();
document.write(`<br>`);
document.write(dayofWeek);


// getFullYear()

let dateOfTime = new Date('March 20 2017');

let year = dateOfTime.getUTCFullYear();
console.log(year);

//getMonth()
let month = dateOfTime.getUTCMonth();
console.log(month);


// setTimeout(function(){}, millisecond)

setTimeout(function () {
    document.write(`<h1> Hello I am Limited by time</h1>`);
}, 3000);