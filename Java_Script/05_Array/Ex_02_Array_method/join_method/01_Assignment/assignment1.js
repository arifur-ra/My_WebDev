function sumOfNumbers(min, max) {
    let sum = 0;

    if (min > max) {
        console.error('Error: minimum value should not be grater then maximum')
        return 'Error:minimum value should not be grater then maximum';
    }
    for (i = min; i <= max; i++) {
        sum += i;
    }
    return sum;

}

console.log('The sum of Number :', sumOfNumbers(0, 15));

document.write(`<li>The sum of number between ${0} and ${15}: ${sumOfNumbers(0,15)}</li>`);
document.write(`<li>The sum of number between ${10} and ${15}: ${sumOfNumbers(10,15)}</li>`);
// ....................Assignment 1.......... Reverse Number............
function reverseNumber(number) {

    let string = number.toString();
    let array = string.split('');
    //console.log(array);
    let reverseArray = array.reverse();
    //console.log(reverseArray);
    string = reverseArray.join('');
    return Number(string);

}

document.write(`<h2>The reverse Number of Array :${reverseNumber(3333366666)}</h2>`);

// ....................Assignment 2......................

// the function takes array and a number
function findGreatest(array, number) {

    let results = [];
    // loop to push items greater than number to temporaryArray
    for (i = 0; i < array.length; i++) {
        if (array[i] > number)
            results.push(array[i]);
    }

    return results;
}

document.write(`<li>The greatest number : ${findGreatest([15,30],20)}</li>`);