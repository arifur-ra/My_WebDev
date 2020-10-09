let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

let showResult = document.getElementById('showResult');



function Result(event) {
    event.preventDefault();
    showResult.innerHTML = ` First Name:${firstName.value} <br> Last Name:${lastName.value} <br> Email Address: ${email.value} <br> Password:${password.value} <br> Confirm Password ${confirmPassword.value} `;
    showResult.style.backgroundColor = 'skyblue';
    showResult.style.marginTop = '1.5rem';
}
// Result(event) {
g
// }