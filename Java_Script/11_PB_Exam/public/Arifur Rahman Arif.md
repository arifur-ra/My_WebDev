### Programming Basics - Arifur Rahman Arif

Test Instructions
Time for This Exam is : 120 minutes

Work from the index.js.

Follow all of the instructions below to complete the test.

Important: Make sure that the names of your variables/functions/classes match the names in the instructions below.

Do not spend too much time trying to fix your issues , move on and try to attempt all questions.

Most tasks require to write a function. Make sure your function returns the expected results as a value

call your functions , and print the return values to the console.

Providing a UI is optional but recommended .

Good luck!

Data Structure
A - Objects

# A-1. Key Value Pairs (5 Points)

Create an object profileData.

Add 4 key value pairs to the object: name, surname, age and city.

# A-2. Object for .. in loop (5 Points)

Write a function findKeyInObject

It should take two arguments an object and a key.

It should return a value of the property if the key found or -1 when no match.

See the example below.

Given Object

example = {
1: 10,

2: 20,

3: 30,
};
Expected Output:

> console.log(findKeyInObject(example, "2"));

20
B - Arrays

# B-1. Data Manipulation (10 Points)

Create a function convertArrayData.

It should take an array as an argument.

Use array methods to manipulate the data the array below.

The first two items in the array should switch positions.

The third item should be replaced by an item containing "milk".

Return the changed array.

Original Array

let beverages = ["coffee", "tea", "juice"];
Call your function to test it, and print the result to the console.

Expected output

> console.log(convertArrayData(beverages));

[ 'tea', 'coffee', 'milk' ]

# B-2. Data Conversion (15 Points)

Create a function convertArraysToObject.

It should take two arrays as arguments.

first array cities should contain city names.

second array areas should contain strings with the cities areas in square kilometer

convert given arrays into object, with key value pairs.

return the object as the result of your function.

Original Arrays

let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];

let areas = [
"891.68 km2",
"755.3 km2",
"310.7 km2",
"207.35 km2",
"217.41 km2",
];
Call your function and log the result to the console.

Expected output

> console.log(convertArraysToObject(cities, areas));

{

Berlin: '891.68 km2',

Hamburg: '755.3 km2',

Munich: '310.7 km2',

Stuttgart: '207.35 km2',

Duesseldorf: '217.41 km2'

}

# B-3. Generate formatted String(10 Points)

Create a function formatPhoneNumber

takes an array of 10 numbers (between 0 and 9)

returns a string of those numbers formatted as a phone number

(e.g. (222) 222-222).

Don't forget the space after the closing parenthesis.

Call your function and print the return value to the console.

Example and expected output:

console.log(formatPhoneNumber([0, 1, 5, 7, 5, 5, 4, 4, 6, 8]));

("(015) 755-4468");

# B-4. Word Converter (10 Points)

Create a function wordConverter.

It should take an array of words as an argument and a string as a word suffix.

Use an array method, to add the suffix to the end of all words.

Important: Do not use a loop to complete this task.

Look at the expected output below.

Example

let adjectives = ["smart", "kind", "sweet", "small", "clear"];
Call your function and print the returned value to the console.

Expected output

> console.log(wordConverter(adjectives, "er"));

[ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]

# B-5. Hour Calculation (10 Points)

Create a function calculateHours

It should expect an array of objects as an argument (see example below)

it should calculate how many hours (total) this person worked in the week based on items in the given array

Note: Assume, that start is always morning time, end is always afternoon. (No overnight shifts to be expected)

Example array of Working Hours

const hourTracking = [
{ day: "Monday", start: 8, end: 17 },

{ day: "Tuesday", start: 9, end: 15 },

{ day: "Wednesday", start: 10, end: 18 },

{ day: "Thursday", start: 7, end: 14 },

{ day: "Friday", start: 6, end: 12 },
];
Call your function and print the return value to the console.

Expected Output

> console.log(calculateHours(hourTracking));

36
C - Last Step (10 Points)
\*/

function assignment() {

}

/\*

Last Step

Update the function assignment to:

1. Accept an argument "array"

2. Loop through the array and:

   - check if each item is equal to typeof "number"

3. For each item that is equal to typeof "number":

   - add these numbers together

For example, assume the following is our array:

["red", 33, "green", 9, 6 ]

We could add the numbers 33, 9 and 6

In this case the result would be:

48

4. RETURN the result

\*/
D - Problem Solving
D-1. Format your string (10 Points)
Write function capitalizeFirstLetter

It should accepts a string as an argument.

If the argument is no string (e.g. 123 or true) convert it to a string first.

The function should convert the first character of each word to uppercase.

Example the quick brown fox → The Quick Brown Fox.

return the changed string.

Call your function and print the return value to the console.

Example call

> console.log(capitalizeFirstLetter("hey there"));

Hey There

> console.log(capitalizeFirstLetter(true));

True
D-2. Random Groups generator (15 Points)
Create a Function that takes as an argument a students array :
/\* the students array consist of objects
and every object will contain two properties a name and level ,
for instance : `
[ ... , { "name":"Karl Wix", "level":"low"} ,
{ "name":"John Doe", "level":"medium"} ,
{ "name":"Laura Puls", "level":"high"}, ... ]

_/
The function returns groups array :
/_ the students array consist of objects
and every object will contain two properties a name and level ,
for instance : `
[ ... ,
{ "group":"p1", "students":[ ... , { "name":"Karl Wix", "level":"low"}, ... ] },
{ "group":"p2", "students":[ ... , { "name":"Peter Wise", "level":"low"},... ] } ,
{ "group":"p3", [ ... , { "name":"Merry Paul", "level":"low"},... ]},
... ]

\*/
Requirements:

This function should formulate groups by taking three students randomly from the students array :

Every Group is limited to have minimum 3 students , maximum 5 students
Every Group should have at least one student with "level":"low"
The Groups Should be generated differently every time we run the generator

Note: The argument has a special type , don't play the narrow cases !!!

Call your function with some examples, and print the return values to the console.

Bonos : Please Create a UI for this assignment and make a real example for FbW39
