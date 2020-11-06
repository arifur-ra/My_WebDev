/**
 * Return the x number to the power of y
Write a function that accepts two numbers and validate that their type is number for sure. 
After that the function should print to the console the all the exponential values between 1 and y. 
For example if we have function(3, 5) The function should print 3, 9, 27, 81, 243.
Another example (2, 8) The function prints 2, 4, 8, 16, 32, 64, 128, 256.
Create another function that accepts again two numbers but in this case it prints all the exponential values (y) for every x number from 1 to x.
Example:
example(5, 4) Will for numbers from 1 to 5 all the exponential to the power of 4.
ex. 1**1
1**2
1**3
1**4

 */

// 5

function powerOfNumber(num1, num2) {
    let result = num1;
    for (let i = 1; i < num2; i++) {
        result *= num1;
    }

    return result;

}



document.write(powerOfNumber(2, 5));