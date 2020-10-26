//Please loop through the option inputs, and if the option[i] is checked please print it't 
//value to the divs[i].innnerHTML, and update divs[i].style.backgroundColor to a new color from your choice

let options = document.getElementsByTagName('input');
let div = document.getElementsByClassName('box');
let list = document.getElementById('list');

let colors = ['red', 'blue', 'green', 'yellow', 'pink', 'saddlebrown', 'darkorange'];


function showDays(event) {
    event.preventDefault();

    let counter = 0;


    for (let i = 0; i < options.length; i++) {
        // the assignment says that if I check one day only one div would change both the color and the innerHTML :)
        if (options[i].checked) {
            div[i].innerHTML = options[i].value;
            div[i].style.backgroundColor = colors[i];
            div[i].style.fontWeight = 'bold';
            counter++;

        } else {
            div[i].innerHTML = null;
            div[i].style.backgroundColor = null;
        }
    }
    list.innerHTML = (`<h2> The number of days Selected : ${counter}</h2>`);
}