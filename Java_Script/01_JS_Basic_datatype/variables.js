/**variables...
 * var, let, const
 */


/* var respect within function parameter*/
var z = 8;


function test() {
    var z = 10;
    console.log(z);
}
test();
console.log(z);


/*var do not respect without function parameter*/
var z = 8;

{
    var z = 10;
    console.log(z);
}
console.log(z);

/*let  respect without function parameter*/

let a = 8; {
    let a = 10;
    console.log(a);
}
console.log(a);