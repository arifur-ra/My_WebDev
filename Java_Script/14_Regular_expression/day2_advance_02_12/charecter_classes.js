// charecter classes

let re = /^\+\d\d/; // \d   means any single digit;

str = '+49017-621-649-289';

//console.log('Using Single digit', re.test(str));
console.log('Using Single digit', str.match(re));



re = /\d+/; // matches one or more digit
str = '49017-621-649-289';
//console.log('Using Single digit', str.match(re));


// Non digit Pattern

re = /\D+/; // its count only Character not number/digit
str = '4road f';
//console.log('Using Single digit not number D', str.match(re));


// Word character class

// its bring Alphanumeric  Alphabet+Number or _;

re = /\w+/g;
str = 'road to the school 4ck';
console.log('Using Alphanumeric Alphabet+Number w', str.match(re));

re = /t\w+/g; // here staring letter t;
str = 'road to the school 4ck';
//console.log('Using Alphanumeric Alphabet+Number w', str.match(re));


// Non Word Character
// its bring non Alphanumeric  like ! !$;
re = /\W+/g;
str = '$road $to the!! school 4ck';
//console.log('Using Alphanumeric Alphabet+Number w', str.match(re));

// space character
re = /\s+/g;
str = '$road $to the!! school 4ck';
console.log('Using Space Character s', str.match(re));

// Not space character
re = /\S+/g;
str = '$road $to the!! school 4ck';
console.log('Using Not Space Character s', str.match(re));


//word boundary  // should be  exactly matching the boundary character
re = /hell\b/i;
str = 'Hell world';
console.log('Word Boundary Character b', str.match(re)); // expected result true hell


// Meta character Symbol

re = /^h/i;
str = 'Hello World';
console.log('Using ^', str.match(re));
re = /world$/i;
console.log('Using $', str.match(re));

re = /h.llo/i;
console.log('Using dot.', str.match(re)); // dot consider only one character
re = /h*llo/i;
console.log('Using *', str.match(re)); // Match Any Character 0 or more times

str = 'The gray';
re = /grae?y/i;
console.log('Using ?', str.match(re)); //  the character ? is optional










// ..........Exercise1.............
//write a regex to check if the string includes at 
//least one word char and one digit and one Non Word char

re = /\d+\w+\W+/;
str = '&4Aarif !!';
console.log('Exercise Result', re.test(str));