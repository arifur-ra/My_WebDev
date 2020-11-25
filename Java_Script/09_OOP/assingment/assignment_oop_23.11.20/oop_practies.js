//..................Exercise 1........................
/**
 * 1. Check if a number is within a given range. Write a program that checks if 
 * a number is within the range of an object's min and max properties. 
 * Assume min <= max is always true.

Examples:
4, { min: 0, max: 5 }) ➞ true
4, { min: 4, max: 5 }) ➞ true
4, { min: 6, max: 10 }) ➞ false
5, { min: 5, max: 5 }) ➞ true
 */
let obj = {
    min: 6,
    max: 5,

    checkMaxNumber(num) {

        if (this.min <= num && this.max >= num) {
            return true;
        } else return false;
    },
};

console.log(obj.checkMaxNumber(5));

// ...............................Exercise 2.....................................

/**
 * 2. Scrabble. Write a program that, given an array of scrabble tiles,
 *  counts the maximum score that a player can earn from the tiles in their hand.
 *  Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, 
 * { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, 
 * { tile: "E", score: 1 } ]
The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
 */

let array = [{
        tile: "N",
        score: 1
    },
    {
        tile: "K",
        score: 5
    },
    {
        tile: "Z",
        score: 10
    },
    {
        tile: "X",
        score: 8
    },
    {
        tile: "D",
        score: 2
    },
    {
        tile: "A",
        score: 1
    },
    {
        tile: "E",
        score: 1
    }
];


let maxScore = scrabble => {

    let sum = 0;
    array.forEach(element => {
        sum += element.score;

    });

    return sum;
};

console.log(`The Max score is ${maxScore(array)}`);


// .........................Exercise 3............................

/**
 * Is it an empty object? Write a program that returns true
 *  if an object is empty, and false if otherwise.
Examples:
{} ➞ true
{a: 1} ➞ false
  */

let myObj = {
    //a:1
};


function isEmpty(obj) {

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;

}

console.log(isEmpty(myObj));



//....................Exercise 4...........................

/**
   * Counting Letters. Create a function that counts the number of 
   * occurrences of each letter in a string. Return an object with key pair 
   * values of letters and the number of occurrences for each letter.

Example:
countLetters("tree") ➞ {t: 1, r: 1, e: 2}
   */

function counterLetters(str) {
    let counter = 1;
    let occurrenceObject = {};

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            counter++;
        } else {
            console.log(str[i] + " " + counter);
            occurrenceObject[str[i]] = counter;
            counter = 1;
        }

    }

    return occurrenceObject;
}
console.log(counterLetters('tree'));

//.....................Exercise 5..................................

/**
    * Free Shipping. Create a function that determines whether an online order
    *  should get free shipping.
    *  An order gets free shipping if the total cost of items exceeds €50.
Examples:
freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
    */

let item = {
    "Sponge": 3.50,
    "Soap": 5.99,
    //"Surround Sound Equipment": 499.99,
    "Wool": 13.99,
    // "Knitting Needles": 15.50,
    "Bag": 13.99
};

let calFreeShipping = item => {
    let sum = 0;
    for (const key in item) {
        sum += item[key];
    }

    if (sum >= 50) {
        return 'Free Shipping';
    } else return 'Extra cost for Shipping';
};
console.log(calFreeShipping(item));



//.......................Exercise 6.................................

const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//Write the command to add the language "Go" to the end of the languages array.

programming.languages.push("Go");
console.log('After pushing the value go:', programming);
//Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log('After change  the value 8 instend 7:', programming);

//Using the delete keyword, write the command to remove the jokes key from the programming object.
//delete programming['jokes'];
delete programming.jokes;

console.log('After delete  the keyword jokes:', programming);

//Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log('After adding the new keyword isFun:', programming);

//Using a loop, iterate through the languages array and console.log all of the languages.
programming.languages.forEach(element => {
    console.log('After using loop:', element);
});

//Using a loop, console.log all of the keys in the programming object.

for (const key in programming) {
    console.log('Key in the Programing Object:', key);
}
//Using a loop, console.log all of the values in the programming object.

for (const key in programming) {
    console.log('key is:', key, ' & value:', programming[key]);
}

/*Create an object method where if the keys "isChallenging" and "isRewarding" 
have values of "true", then return "Learning the programming languages: 
"JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment,
 explain what is printed if we console.log an object method without calling it 
 and why. */