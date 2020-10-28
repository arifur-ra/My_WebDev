/**The join() method returns the array as a string.
The elements will be separated by a specified separator. The default separator is comma (,).
Note: this method will not change the original array.*/

let string = "FireAirWater";

let array = string.split('');
console.log('The Value after Split:', array);

array.splice(4, 0, ' ');
console.log('The Value after Splice', array);

array.splice(8, 0, ' ');
console.log('The Value after Splice', array);

array.reverse();
console.log('The Value after Reversed', array);

string = array.join(' ');
console.log('The Value after join ', string);

//string = array.reverse();
//console.log('The Value after Reverse:', string);