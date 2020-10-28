/**
 *crate an empty div the html file
 *give it  an id
 * in the js file select by id
 * style it as a box by adding a box class to it from js
 * add inner html elements
 * two h1 next tow other;
 * under the h1 one paragraph
 * the box bc color is white
 * h1 color should be white 
 * p bc color light blue and color red
 */

let emptyDiv = document.getElementById('empty');
emptyDiv.classList.add('box');
emptyDiv.innerHTML = ' <h1> Hello World</h1> <h1> I am here!</h1> <p> i am a student of DCI and trying to learn javascript</p>';

// emptyDiv.style.padding = '4rem';
// emptyDiv.style.width = '20rem';
// emptyDiv.style.display = 'inline-block';
// emptyDiv.style.backgroundColor = 'red';
// emptyDiv.style.color = 'white';