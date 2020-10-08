/**
 * please replace 'correct' with 'secret'
 * assign the returned string after replacement to newSyntax variable
 * assign the newSyntax to the paragraph.innerHTML;
 */


let newSyntax = document.getElementById('syntax');

let result = newSyntax.innerHTML;

let returnString = result.replace('correct', 'secret');

newSyntax.innerHTML = returnString;

console.log(returnString);