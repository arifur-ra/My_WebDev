/*Assign Grade
Write a function that accepts a number from 1 to 100 as a result of a test you gave to your students.
If the result is lower than 50 then print Not Pass! Try again next time.
If it is between 50-60 print the grade D.
If it is between 61-80 print the grade C
If it is between 81-90 print the grade B
If it is between 91-98 print the grade A
If it is 99 print 'Almost perfect'
If it is 100 'Take a day-off tomorrow'
Put different values and call the function multiple times to check your result.
*/

let result = document.getElementById('result');

function calculateGrade() {
    let value = document.getElementById('inputValue').value;

    if (value == '') {
        result.innerHTML = 'please write correct value between 0 to 100';
    } else if (value >= 50 && value <= 60) {
        result.innerHTML = 'The Point Grade is D';
        result.style.color = 'red';

    } else if (value >= 61 && value <= 80) {
        result.innerHTML = 'The Point Grade is C';
        result.style.color = 'black';

    } else if (value >= 81 && value <= 90) {
        result.innerHTML = 'The Point Grade is B';
        result.style.color = 'yellow';

    } else if (value >= 91 && value <= 98) {
        result.innerHTML = 'The Point Grade is A';
        result.style.color = 'green';

    } else if (value == 99) {
        result.innerHTML = 'Almost Perfect';
        result.style.color = 'blue';

    } else if (value == 100) {
        result.innerHTML = 'Take a day of tomorrow';
        result.style.color = 'pink';

    } else
        result.innerHTML = 'Not Pass! Try again next time';
}
//console.log(calculateGrade(50));
//result.innerHTML += calculateGrade();