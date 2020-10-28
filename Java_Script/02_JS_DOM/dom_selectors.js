//document selector

let paragraphElement = document.getElementById('paragraph');
paragraphElement.innerHTML = ' <h1>Just changing the inner HTML</h1><span>Hi we are writing js code</span>';
paragraphElement.classList.add('newclass');
paragraphElement.style.marginBottom = '4rem';
paragraphElement.style.padding = '2rem';
// console.log(paragraphElement.classList);
// console.log(paragraphElement.className);
// console.log(paragraphElement.innerText);


// using tagName like div aside section 
// document.getElementsByTagName();

const elementsCollection = document.getElementsByTagName('div');
elementsCollection[1].classList.add('test');
elementsCollection[1].innerHTML = ' <h1> New Styling now</h1> ';
console.log(elementsCollection[1]);

// console.log(elementsCollection[1]);