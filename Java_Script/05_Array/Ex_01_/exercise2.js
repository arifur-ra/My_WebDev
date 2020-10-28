// until 12:09. /
// Find the index of 'Safwan' in each of the arrays inside the arrayOfUSers.
//Use Foreach for the arrayOfUsers and use indexOf to find Safwan.

let arrayOfUsers = [
    ['Safwan', 'Gabor', 'Jon', 'Manon', 'Ljiljana', 'Nargiza', 'Santiago'],
    ['Gabor', 'Glauber', 'Manon', 'Ljiljana', 'Safwan', 'Daniel', 'Santiago'],
    ['Gabor', 'Jon', 'Safwan', 'Manon', 'Arif', 'Nargiza', 'Matheus'],
    ['Matheus', 'Jon', 'Manon', 'Ljiljana', 'Nargiza', 'Santiago', 'Safwan'],
    ['Gabor', 'Safwan', 'Jon', 'Manon', 'Ljiljana', 'Nargiza', 'Santiago'],
    ['Safwan', 'Gabor', 'Jon', 'Manon', 'Ljiljana', 'Nargiza', 'Santiago'],
]

arrayOfUsers.forEach((element) => {
    console.log('The index of Safwan:',
        element.indexOf('Safwan'));
});

// Another way to solved 

let arrayOfIndex = [];
arrayOfUsers.forEach((element) => {
    arrayOfIndex.push(element.indexOf('Safwan'))
});
console.log('The index of Safwan', arrayOfIndex);