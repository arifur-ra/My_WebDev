//let num = document.getElementById('num').value;
//let n = 1;

let successful = document.getElementById("odd");
let unsuccessful = document.getElementById("even");
successful.style.display = "none";
unsuccessful.style.display = "none";

function checkNumber(e) {
    // the valid number is odd
    while (e.target.value % 2 != 0) {
        successful.style.display = 'block';
        successful.innerHTML = `${e.target.value}  Successful`;
        setTimeout(() => {
            successful.style.display = "none";
        }, 3000);
        break;
    }
    while (e.target.value % 2 == 0) {
        unsuccessful.style.display = 'block';
        unsuccessful.innerHTML = `${e.target.value} Invalid Number`;

        setTimeout(() => {
            unsuccessful.style.display = "none";
        }, 3000);

        break;
    }


    // We can use also if statement for it;



}