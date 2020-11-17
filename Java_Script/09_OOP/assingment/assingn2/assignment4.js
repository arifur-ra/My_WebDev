/**
 *create arrow function takes one param
 * this param is a object like below:
 * define an object that have some properties
 * each property is like this : 'Safwan':'100'
 * the function returns sum <number> of the salaries
 *
 * example :
 *
 * sumOfSal({'Safwan':'100','Glauber':'1000000'}) --> 1000100
 *
 */
const salaries = {
    'safwan': 100,
    'glauber': 100000,
    'sara': 200
}

const someOfSalary = obj => {

    let sum = 0;

    for (let k in obj) {
        sum += (obj[k]);
    }
    return sum;
};




//object = object1.salary + object2.salary;
console.log(someOfSalary(salaries));