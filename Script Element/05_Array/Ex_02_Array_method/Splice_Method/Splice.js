// Splice: delete one or more elements starting from a certain position

let arrayOfUsers = ['Safwan', 'Gabor', 'Jon', 'Manon', 'Ljiljana', 'Nargiza', 'Santiago'];
console.log('Initial Array', arrayOfUsers);

let deleted = arrayOfUsers.splice(3, 2);
console.log('After Splice', arrayOfUsers);
console.log('Deleted Array', deleted);



// using Splice: method
// Take the array Menu and delete all elements with type meat. 
//DON'T create a new array for menu.
// Obtain the index of the meat foods and then delete with splice. 

let menu = [{
        name: 'Falafel',
        type: 'veggie'
    },
    {
        name: 'meatballs',
        type: 'meat'
    },
    {
        name: 'dhal',
        type: 'veggie'
    },
    {
        name: 'seitan',
        type: 'vegan'
    },
    {
        name: 'biriyani',
        type: 'meat'
    },
    {
        name: 'Burger',
        type: 'meat'
    },
    {
        name: 'Humus',
        type: 'vegan'
    },
    {
        name: 'Pasta with Pesto',
        type: 'veggie'
    },
    {
        name: 'lasagna',
        type: 'meat'
    },
    {
        name: 'Coconut rice',
        type: 'vegan'
    },
    {
        name: 'Spanish Omelette',
        type: 'meat'
    },
];

let indexOfMeat = [];
let detetedItem;

menu.forEach((element, index) => {

    if (element.type == 'veggie') {
        indexOfMeat.push(index);
    }

});

indexOfMeat.forEach((element, index) => {
    menu.splice(element - index, 1);
});

console.log('The Current menu',
    menu)
console.log('Deleted Item:',
    indexOfMeat);

// Others use of Splice

let users = ['Safwan', 'Gabor', 'Jon', 'Manon', 'Ljiljana', 'Nargiza', 'Santiago'];

console.log('Initial array', users);
// second case of splice use

let changeElement = users.splice(2, 3, 'Roza', 'saim', 'Ayan');
console.log('The New Element', users);

// Third case of Splice use

let deletedElements = users.splice(1, 0, 'Nils', 'Glauber', 'Rashad');
console.log(users);