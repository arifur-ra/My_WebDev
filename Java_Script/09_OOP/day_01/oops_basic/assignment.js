/**
 * 1.Create an object with at least four key/value pairs. Try to emulate a real life thing.
 *  Such as a person or a house.Display your object in your console.
 *  2. Add at least two more properties to your object.Display your object in your console.
 * 3.Change one of the properties in your object.Display your object in your console.
 * 4. Remove a property in your object.Display your object in your console.
 * 5.Using a For In loop display the contents of your object in your console.
 * 6. Convert the properties(keys) of your object into an array.Display this array in your console.
 * 7.Convert the values of your object into an array.Display this array in your console.
 * 8.Convert both keys and values into an array.
 * 9.Using a normal For loop, display the values only in your console.
 * 
 * 10.Create an object circle. Give the circle a property key of radius with a value of your choice.
 *  Create a function that accepts this object  as an argument.Calculate the area of this circle. 
 * Add a property to this object called area with the calculated result. 
 * Display the object in your console.To calculate the area the formula is Pi x radius x radius.
 */

let aboutMe = {
    name: 'Arifur',
    age: 25,
    status: 'married',
    favoriteColor: 'white'
};
console.log(aboutMe);
//console.log(`Name:${aboutMe.name} \n  Age:${aboutMe.age}\n Status:${aboutMe.status}\n ${aboutMe.favoriteColor}`);
// adding two properties
aboutMe.hobby = 'Playing Cricket';
aboutMe.luckeyNumber = 7;

console.log(`Name:${aboutMe.name} \n  Age:${aboutMe.age}\n Status:${aboutMe.status}\n ${aboutMe.favoriteColor}\n Hobby:${aboutMe.hobby} \n Luckey Number:${aboutMe.luckeyNumber}`);

// change one Property 

aboutMe.age = 30;
// After change
console.log(`Name:${aboutMe.name} \n  Age:${aboutMe.age}\n Status:${aboutMe.status}\n ${aboutMe.favoriteColor}\n Hobby:${aboutMe.hobby} \n Luckey Number:${aboutMe.luckeyNumber}`);

// Delete one Property

delete aboutMe['luckeyNumber'];
// After deleting one property
console.log(`Name:${aboutMe.name} \n  Age:${aboutMe.age}\n Status:${aboutMe.status}\n ${aboutMe.favoriteColor}\n Hobby:${aboutMe.hobby} \n Luckey Number:${aboutMe.luckeyNumber}`);
console.log(aboutMe);


// using for in loop
for (properties in aboutMe) {
    console.log(properties, aboutMe[properties]);
}

// converts keys and values into Array
const objKeys = Object.keys(aboutMe);
console.log(objKeys);
const objValues = Object.values(aboutMe);
console.log(objValues);


//Once converted to use a normal For loop to access only values inside our aboutMe object

for (let i = 0; i < objValues.length; i++) {
    console.log(objValues[i])
}

/**
 * 10.Create an object circle. Give the circle a property key of radius with a value of your choice.
 *  Create a function that accepts this object  as an argument.
 * Calculate the area of this circle. 
 * Add a property to this object called area with the calculated result. 
 * Display the object in your console.To calculate the area the formula is Pi x radius x radius.
 */

const circle = {
    radius: 25
};

function calculateArea(circleObject) {
    let areaOfCircle = 3.1415 * circleObject.radius * circleObject.radius;
    circleObject.area = areaOfCircle;
    return circleObject;

}
console.log(calculateArea(circle));