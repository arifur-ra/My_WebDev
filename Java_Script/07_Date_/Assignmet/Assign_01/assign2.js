// example 

/***
 * the date I started university : july 01 2007;
 * i stay in the uni till :september 15 2012;
 * calculate how many years i spend there
 */

let startDate = new Date('July 01 2007').getTime() / 1000 / 60 / 60 / 730.001;

let endDate = new Date('September 15 2012').getTime() / 1000 / 60 / 60 / 730.001;

let diff = endDate - startDate;

console.log(diff);

// solving using with function
function diffYear(startDate, endDate) {

    let x = Math.round(new Date(startDate).getTime() / 1000 / 60 / 60 / 730.001);
    let y = Math.round(new Date(endDate).getTime() / 1000 / 60 / 60 / 730.001);

    return y - x;
}
//console.log(diffYear('July 01 2007', 'September 15 2012'));



function showMonthOfTime() {
    let start = document.getElementById('input1').value;
    let end = document.getElementById('input2').value;
    let result = document.getElementById('result');

    result.innerHTML = ` The month of ${diffYear(start, end)}`;
    result.style.textAlign = 'center';



}