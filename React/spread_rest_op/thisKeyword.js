// Normal Function

// function sayMyName(name){
// console.log('This is My',name)
// }
// sayMyName('Arif');

// arrow function

const sayMyName=name=>{
console.log('This is My',name)

}

let person={
    name:'Arif',
    age:30,
    me:{
        sureName:'Rahman',
        whoIsMe: ()=>{
            console.log(this)
        }
    }
    
}
// If we use normal function keyword then 'this' will skip the function and keep binded to the first block contain the function
// If we use Arrow function keyword then 'this' keyword does not respect any scope and always to the refer to the general scope

person.me.whoIsMe()

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    // whoIsThis=function () {
    //     console.log(this)
    // }
    whoIsThis= ()=> {
        console.log(this)
    }
}
// It does not harm 'this' keyword inside the Class Constructor, whatever it arrow or normal Function. its work for both 
let p1= new Person('Sara',23);
let p2= new Person('Lara',33);

p1.whoIsThis()
p2.whoIsThis()
