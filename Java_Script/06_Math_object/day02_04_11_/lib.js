// function sumofValue(param1, param2) {
//     // here is my code

//     return param1 + param2;
// }

//---------------------Assignment 1.....................................

function gratesNumber(array) {
    // return Math.max(array);
    //return Math.max.apply(null, array);
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

//---------------------Assignment 2.....................................
function isItValue(value) {
    if (typeof value == 'number') {
        return true;
    } else {
        return false;
    }
}


//---------------------Assignment 3.....................................

// let greetingWords = ['hello', 'hi', 'how are you'];
// let result = [];
// let k = 0;

// function listOfPeople(array) {
//     // through the array
//     for (let i = 0; i < array.length; i++) {
//         result.push(greetingWords[k] + '' + array[i]);
//         k++;

//         if (k == 3) k = 0;
//     }
//     return result;
// }


//---------------------Assignment 4...............................

/* define a function a name generate a random ticket of three digit(100-999) for it;
return a string 'the name'+ the ticket;

*/
// generate random ticket;
function ticketNumber(nameOfPerson) {
    // return Math.random()*((y-x)+1)+x
    return `${nameOfPerson} T:${Math.floor(Math.random() * ((900-100)+1)+100)} `;

}

// let customer = ['Arif', 'safwan', 'Manon', 'Adam'];

// function createTicketCustomer() {

//     for (let i = 0; i < customer.length; i++) {
//         customer[i] += ticketNumber();
//     }

//     return customer;
// }

// console.log(createTicketCustomer());