// assignment2
/**
 * 
 * please crate an arrow function the name is makeUser and take two parameters 
 * name and age and return an object with two properties like
 * {
 * name:Arif
 * Age:30
 * }
 */

let makeUser = (name, age, course) => {
    return {
        name,
        age,
        course
    };
};

console.log(makeUser('Arif', 30, 'FBW39'));
console.log(makeUser('Bob', 32, 'FBW39'));
console.log(makeUser('Franzi', 25, 'FBW39'));