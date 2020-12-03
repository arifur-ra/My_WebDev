// Regular Expression

// Constructor way

let re = new RegExp('Pattern', 'i');

// literals  way

re = /pattern/i; // g--global,i---case insensitive

console.log(re.flags); // re.flags-- what kind of flags i used
console.log(re.source); // to see the pattern of source


// // FlagsS

// i ---Case insensitive


// m--multiple line: used to apply the regexp for every line

re = /^football/m;
str = 'my favorite sports is :n\nfootball ';

let result = re.test(str);
console.log('Using Multiline m', result);
console.log('Using Multiline m', re.multiline);

// s: it make 'dotAll' applies for all: // new line or new r/n ,/r

re = /lock.down/is;
str = 'currently we are under lock\ndown covid19 situation';

result = re.test(str);
console.log('Using dotAll s', result);
console.log('Using dotAll s', re.dotAll);
console.log(str);
result = str.replace(re, '');
console.log('Using dotAll s', result);

// y : Sticky   : its indicate whether flag y used or not

str = 'My Name is Arif';
// find all word in the str

re = /\w+/yg;

re.lastIndex = 8;
let word = re.exec(str);
console.log('Using Sticky flag y', word[0]);

// console.log('Using Sticky flag y', re.sticky);
// let word = re.exec(str);
// console.log('Using Sticky flag y', re.lastIndex);
// let word1 = re.exec(str);
// console.log('Using Sticky flag y', word1[0]);
// console.log('Using Sticky flag y', re.lastIndex);








str = 'the pattern in a RegExp is pattern the providing the source of it';


re = /pattern/gi; // g--global search for all matches. i---case insensitive


// exec()  RegExp Method
result = re.exec(str);
console.log(result);

// match() String Method
result = str.match(re);
console.log(result);

// replace() : string method
re = /-/gi;

str = '2-10-2020';
result = str.replace(re, '/');
console.log(result);