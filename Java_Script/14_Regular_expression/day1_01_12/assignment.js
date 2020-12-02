// ..............Exercise One............

const myNameIs = (name, text) => {
    let re = new RegExp(name);
    return re.test(text);
};

let name = 'FBW39';
let par = 'FbW39 is the part of my class, hello people';

let output = myNameIs(name, par);
console.log(output);




//which string matches the below pattern :
re = /^$/;

let string = '';

console.log(re.test(string));


//use regex to implement the below search button

searchWord = () => {
    let input = document.getElementById('input').value;
    let word = document.getElementById('para').innerHTML;
    let result = document.getElementById('result');


    let re = new RegExp(input, 'i'); // i is case insensitive

    if (re.test(word)) {
        result.style.background = 'blue';
        result.style.color = 'white';
    } else {
        result.style.background = 'red';
        result.style.color = 'white';
    }

    result.innerHTML = `${re.test(word)}`;

};