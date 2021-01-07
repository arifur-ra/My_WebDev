//....................... Spread rest operators.............
//......................... destructuring...................

let a,b,c;
[a,b]=[100,200];    // array destructuring

//console.log(a,b);

const names=['Jon','Arif','Safwan','Gabor','Manon'];
let [person1,person2,person3]=names;
console.log(person2)

// Object destructuring


const person={
    name:'Arif',
    age:30,
    city:'Berlin',
    sayHi: function(){console.log('Hello World!!');},
    country:'bangladesh',
    address:{
        strasse:'Danziger strasse',
        house:241,
        country:'Germany'
    }

}

const {city,name,age,sayHi,address:{strasse,country,house}}=person;
sayHi();
console.log(country);
console.log(house);

//....................... Rest Pattern (...)...............


let [x,y,...z]=[1,2,3,4,5,6,7,9];

console.log(x);
console.log(z);   // here ...z means rest of the value of array;


// Object Rest patterns

let Obj={
    u:100,
    o:200,
    p:300,
    l:500,
    e:700
};

const {u,o, ...v}=Obj;
console.log(v);
const {...w}=Obj;
console.log(w);  // making an isolated copy of the object

//...........................Spread (...)....
let array=[1,2,3,4,5,6,7,8,9,19,30,31,11,22,];
//console.log(array);
console.log(...array);

let max=Math.max(...array);
console.log('Maximum of Value:',max);
//
const sum=(x,y,z)=>x+y+z;
let array1=[31,11,22,];
let res = sum(...array1);
console.log('Sum of Value:',res);  // spread operator makes the array isolation value


