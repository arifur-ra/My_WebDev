// Change the elements with type meat from the menu array, 
//use the veggieOptions array to obtain the replacing elements. 

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



let veggieOptions = [{
    name: 'apple-pie',
    type: 'veggie'
}, {
    name: 'margarita pizza',
    type: 'veggie'
}, {
    name: 'musli',
    type: 'veggie'
}, {
    name: 'quinoa burger',
    type: 'veggie'
}, {
    name: 'potato salad',
    type: 'veggie'
}, ]


let indexOfMeat = [];
menu.forEach((element, index) => {

    if (element.type === 'meat') {
        indexOfMeat.push(index);
    }

});

console.log('The index of Meat:', indexOfMeat);

indexOfMeat.forEach((element, index) => {
    menu.splice(element, 1, veggieOptions[index]);

});

console.log('The new menu:', menu);