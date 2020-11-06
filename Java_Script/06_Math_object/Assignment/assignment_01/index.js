 let ticket = document.getElementById('ticket');
 let inputCustomer = document.getElementById('customer');
 let display = document.getElementById('display');



 function ticketNumber() {

     return ` T:${Math.floor(Math.random() * (100-999) + 1)} `;
     //  ticket.innerHTML = `Ticket No: ${result}`;
 }


 // new function

 let customerArray = [];


 function createTicketCustomer() {
     // bring the HTML element value
     let customer = inputCustomer.value;

     // assign a ticket to the new customer
     customer += ticketNumber();

     // Adding customerArray using push() method
     //  customerArray.push(customer);

     //  display.innerHTML = ''; // initially cleaning
     //  // use a loop to display the array 
     //  //using while loop
     //  let counter = 0;

     //  while (counter < customerArray.length) {
     //      // Display the element in the innerHTML of the

     //      display.innerHTML += customerArray[counter] + '<br>';

     //      counter += 1;

     //  }

     // using forEach
     //  customerArray.forEach(element => {

     //      display.innerHTML += element + '<br>';

     //  });

     // using join()method

     //  display.innerHTML = customerArray.join('\n');




     // --------------------using String for display---------------
     if (display.innerHTML === 'No Customer') {
         display.innerHTML = ''; // initially cleaning

     }

     display.innerHTML += customer + '<br>';

 }












 // new 

 function randomTicketNumber() {
     return `T ${Math.floor(Math.random() * 100+1)}`;

 }
 let customers = ['Jon', 'Adam', 'Manon', 'Daniel', 'Arif', 'Matheus'];

 let customersWithTickets = [];


 function giveTicketToCustomer(array) {
     for (let i = 0; i < array.length; i++) {
         customersWithTickets.push({
             name: array[i],
             ticket: randomTicketNumber()
         });
     }
     return customersWithTickets;
 }
 console.log(giveTicketToCustomer(customers));