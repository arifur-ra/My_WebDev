document.write(`<h1> Here is the result</h1>`);

let exampleArray = ['a', 'b', 'c', 'd'];
// console.log(exampleArray);



/**
 * Please create an Array of users (every user is a string, only the name)
 * loop through the array (for loop) , and print a list of users , along with there order in the array (show also the index)
 */


let usersName = ['Arif', 'Ayan', 'Saifan', 'Saima', 'Roza', 'Amin'];
let i;
let count;

for (i = 0; i < usersName.length; i++) {
    document.write(`The  of user index:${i} Name:${usersName[i]}  <br>`);
}

/**search for the user called 'Sebstain'
* if there is no user called 'Sebstain' , please change if:'Santiago' to be 'Sebstain'
const users = ['Safwan','Gabor','Jon', 'Manon','Ljiljana','Nargiza','Santiago'];*/

let users = ['Arif', 'Ayan', 'Saifan', 'Saima', 'Roza', 'Amin', 'Santiago'];

let found = false;

for (let j = 0; j < users.length; j++) {

    if (users[j] == 'Sebstain') {
        //update the flag if found,!found = false
        found = true;
    }

}
console.log(!found);
//document.write(`<h2> ${found}</h2>`);

//* if there is no user called 'Sebstain'

if (!found) {
    // search for santiago

    for (let j = 0; j < users.length; j++) {
        if (users[j] == 'Santiago') {
            // change 'Santiago' to 'Sebstain'
            users[j] = 'Sebstain';
        }

    }
}
console.log(users);