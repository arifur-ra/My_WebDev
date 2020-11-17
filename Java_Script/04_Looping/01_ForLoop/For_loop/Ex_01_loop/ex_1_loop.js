//let guest1, guest2, guest3, guest4, guest5, guest6;
let guest1 = {
    name: "Daniel",
    class: "Bob Marley",
    age: 20,
};
let guest2 = {
    name: "Gabor",
    class: "Bob Marley",
    age: 23,
};
let guest3 = {
    name: "Selbastian",
    class: "Bob Marley",
    age: 26,
};
let guest4 = {
    name: "Lara",
    class: "Bob Marley",
    age: 17,
};
let guest5 = {
    name: "Peter",
    class: "Bob Marley",
    age: 65,
};
let guest6 = {
    name: "Sophia",
    class: "Bob Marley",
    age: 35,
};
let guests = [guest1, guest2, guest3, guest4, guest5, guest6];
/*
Write a for loop creating unordered list, to list the invited people to our party, 
the party has a restriction of age, it should be under 60 and over 18
*/

for (let i = 0; i < guests.length; i++) {
    if (guests[i].age > 18 && guests[i].age < 60) {
        document.write(`<li> List of Guest: ${guests[i].name} </li>`);

    }
}