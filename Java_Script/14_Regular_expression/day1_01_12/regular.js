// Regular expression literals;



let re = /ab+c/;
re = /hello/i; // i means case insensitive;

let reg = new RegExp('hello');
console.log(reg);


// exec()

let result = re.exec('eeeeeeeeeHeLLoguys !!');
console.log('using exec()', result);


// test() return true or false


result = re.test('hello');

console.log('Using test()', result);

// string() Method;
// match()

const str = 'The yellow Sun is above the brown mountain; hello, it is a sunny Day';

const reexp = /ello/i;

result = str.match(reexp);
console.log(result);

// search()  return in the index of first match()

result = par.search(reexp);
console.log(result);

// replace();
result = str.replace(re, 'hi');

console.log(result);

// Anchor ^caret

re = /^a/i // must start letter a

let tes = 'Arif is a good boy';

console.log(re.test(tes));

//

re = /Arif$/i //
tes = 'He is a good like Arif';

console.log(re.test(tes));


//...................... Exercise 2.................................