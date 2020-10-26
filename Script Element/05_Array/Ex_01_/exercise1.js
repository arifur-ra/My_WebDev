//let alafel, meatballs, dhal, seitan, biriyani;
//// please loop through the menu, and print the name of the dish witch have the largest number of ingredients


let falafel = {
    name: 'falafel',
    type: 'veggie',
    ingredients: ['chickpeas', 'beans', 'flour', 'cumin', 'oil', 'salt', 'garlic'],
};
let meatballs = {
    name: 'meatballs',
    type: 'meat',
    ingredients: ['egg', 'minced meat', 'parsley', 'buns', 'oil', 'salt', 'garlic', 'black pepper'],
};
let dhal = {
    name: 'dhal',
    type: 'veggie',
    ingredients: ['chanadhal', 'onion', 'tomato', 'butter', 'ghee', 'salt', 'garlic', 'chilli powder', 'ginger', 'cumin', 'mustard seeds', 'curry leaves'],
};
let seitan = {
    name: 'seitan',
    type: 'vegan',
    ingredients: ['wheat gluten', 'chickpea flour', 'tomato sauce', 'paprika', 'nutritional yeast', 'salt', 'garlic', 'chilli powder'],
};
let biriyani = {
    name: 'biriyani',
    type: 'chicken',
    ingredients: ['rice', 'chicken', 'onions', 'Garlic', 'ginger', 'masala', 'oil', 'Chilli', 'chickenmasla', 'puls', 'potato', 'paprika']
};
let menu = [falafel, meatballs, dhal, seitan, biriyani];
// here you can use a temporary variable to compare with
let moreIngredients = 0;
// you need to save the index as well
let dishName;
for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.length > moreIngredients) {
        moreIngredients = menu[i].ingredients.length;
        dishName = menu[i].name;
    }
}
document.write(`<h2> The Most ingredients menu is : ${dishName} and largest number of ingredients ${moreIngredients} </h2>`); // solved ?? yes, thanks
// welcome :) 

// Another way to solved
let moreIngredientsdish = '';
for (let i = 0; i < menu.length; i++) {
    for (let j = 1; j < menu.length; j++) {
        if (menu[i].ingredients.length >= menu[j].ingredients.length) {
            moreIngredientsdish = menu[i].name;
        }
    }
}

document.write(`<h2> The Most ingredients menu is : ${moreIngredientsdish}  </h2>`);



//please loop through the menu and divide it into veggieMenu , veganMenu , meatMenu and chickenMenu
let veggieMenu = [];
let veganMenu = [];
let meatMenu = [];
let chickenMenu = [];

for (let k = 0; k < menu.length; k++) {
    if (menu[k].type == 'veggie') {
        veggieMenu.push(menu[k].name);
    }
    if (menu[k].type == 'vegan') {
        veganMenu.push(menu[k].name);
    }
    if (menu[k].type == 'chicken') {
        chickenMenu.push(menu[k].name);
    }
    if (menu[k].type == 'meat') {
        meatMenu.push(menu[k].name);
    }

}
document.write(`<li>The Veggie menu is ${veggieMenu}</li>`);
document.write(`<li>The Vegan menu is ${veganMenu}</li>`);
document.write(`<li>The Chicken menu is ${chickenMenu}</li>`);
document.write(`<li>The Meat menu is ${meatMenu}</li>`);


// Search for an user with property name equal to sebastian and if you found it say with a / / console.log "found it!".If not then change the user with property name Matheus to Sebastian 

// using forEach;


let usersInfo = [{
        name: 'Safwan',
        address: 'Hamburg',
        age: 33,
        profession: 'Teacher'
    },
    {
        name: 'Arif',
        address: 'Berlin',
        age: 30,
        profession: 'DCI Student'
    },
    {
        name: 'Manon',
        address: 'NRW',
        age: 30,
        profession: 'DCI Studnet'
    },
    {
        name: 'Adam',
        address: 'belin',
        age: 32,
        profession: 'DCI-Student'
    }
];
let found = false;
let indexOfAdam = 0;

usersInfo.forEach((element, index) => {

    if (element.name === 'Matheus') {
        //update the flag if found,!found = false
        // if statement to 
        found = true;
        console.log(element.name);
    }

    if (element.name === 'Adam') {
        indexOfAdam = index;

    }

});


if (found) {
    // search for Adam
    console.log('Found it the Name')

} else {
    console.log('User Name Matheus doesnot Exist, will change it')
    usersInfo[indexOfAdam].name = 'Matheus';
    console.log(usersInfo);
}

// console.log(users.element);