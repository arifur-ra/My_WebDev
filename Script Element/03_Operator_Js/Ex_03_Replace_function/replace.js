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


// Replace Hi to Hello  

let name = " Hi Everyone, My Name is Arif, Hi manon, how is going on . Hi everyone, how are you ?";
console.log(` Normal Text:  ${name}`);

let replacename = name.replaceAll('Hi', 'Hello');

document.write(`<h2>${replacename}</h2>`);

//console.log(`Replace Text: ${replacename}`);



let Searchname = name.search('Arif');
console.log(Searchname);

let val = name.substring(Searchname, Searchname + 4);
console.log(val);