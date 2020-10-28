/***
 * please get the h3 by Id.
 * save the inner html in a string variables
 * find inside it the phrase 'code' using the substring method
 * save the substring in another variable named secret
 */



let syntax = document.getElementById('syntax');

let result = syntax.innerHTML;

let secret = result.substring(result.length - 10, result.length - 6);
console.log(secret);

/**
 * search for the substring 'try' using search method
 * save it using substring method ina variable :
 * save the index in a variable
 * substring (start:index, end:index+3)
 * **/


let search = result.search('try');
console.log(search);

val = result.substring(search, search + 3);
console.log(val);