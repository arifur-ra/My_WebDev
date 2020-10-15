/**Write a for loop to count the checked options
options[i].checked == true
if(options[i].checked){
    counter += 1;
}*/

//let options = document.getElementById('options').children;
//let options = document.getElementsByTagName('input');
//options[2] = true;
//console.log(options[2].checked);



function countOptions(event) {
    event.preventDefault();

    //let counter = 0;

    let options = document.getElementsByTagName('input');
    let div = document.getElementsByTagName('div');

    for (let i = 0; i < options.length; i++) {

        if (options[i].checked) {
            div[i].style.backgroundColor = options[i].value;
            //counter += 1;

        } else {
            div[i].style.backgroundColor = null;
        }

    }
    // console.log(counter);
}