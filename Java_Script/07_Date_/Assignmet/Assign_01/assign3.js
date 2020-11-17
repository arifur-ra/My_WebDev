/**
 * write a function takes a parameter birth date and returns  the age now 
 */

function ageOfME(birthDate) {

    let x = new Date(birthDate).getFullYear();
    let y = new Date().getFullYear(); // brings current  date now
    return y - x;
}

console.log(ageOfME('November 20 1998'));


//

function showBox() {
    let div = document.getElementById('div');
    div.style.display = 'block';

    setTimeout(function () {
        div.style.display = 'none';

    }, 3000);
}