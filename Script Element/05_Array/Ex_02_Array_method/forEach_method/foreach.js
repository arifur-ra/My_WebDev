// Foreach Method

let users = ['Arif', 'Ayan', 'Saifan', 'Saima', 'Roza', 'Amin', 'Santiago'];

document.write(` My user length is: ${users.length}`);


// the element will be each element of array .And the index will be the 
// index of this element in the array.
users.forEach((element, index) => {
    document.write(`<li> My user index and name is: ${index} ${element}</li>`);

})


// Another Example

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
]

// using for loop
document.write(` <h2>Using for Loop</h2>`);

for (let i = 0; i < usersInfo.length; i++) {
    document.write(` <li>${i}:<br> Name: ${usersInfo[i].name} <br> Address:${usersInfo[i].address} <br> Age:${usersInfo[i].age}</li> `)
}


document.write(`<br>`);
// using forEach
document.write(` <h2>Using forEach</h2>`);

usersInfo.forEach((element, index) => {
    document.write(` <li>${index}: <br>Name: ${element.name}<br> Address:${element.address}<br> Age:${element.age}</li>`)

})