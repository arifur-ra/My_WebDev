let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let checkbox = document.getElementById('checkbox');

let showResult = document.getElementById('showResult');



function Result(event) {
    event.preventDefault();

    // let checkbox = 'on';
    // if (checkbox.checked) {
    //     checkbox = 'off';
    // }

    showResult.innerHTML = ` First Name:${firstName.value} <br> Last Name:${lastName.value} <br> Email Address: ${email.value} <br> Password:${password.value} <br> Confirm Password ${confirmPassword.value} <br> `;
    showResult.style.backgroundColor = '#4a920f';
    showResult.style.borderRadius = '1rem';
    showResult.style.color = 'red';
    showResult.style.margin = '1rem .5rem';
}
// Result(event) {

// }