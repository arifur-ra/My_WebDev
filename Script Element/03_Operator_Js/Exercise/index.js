// get input
let firstStory = document.getElementById('firststory');
let secondStory = document.getElementById('secondstory');
let lastStory = document.getElementById('laststory');
let showStory = document.getElementById('showstory');


function showDetails(event) {
    event.preventDefault();
    // let gender = 'Mrs';
    // if (male.checked) {
    //     gender = 'Mr.';
    // }

    showStory.innerHTML = `<p> Here is My Story: <br> ${firstStory.value} and ${secondStory.value} and ${lastStory.value}  <br> Thanks to All :)</p>`;
    showStory.style.background = 'lightGreen';
    showStory.style.padding = '1rem';
    showStory.style.borderRadius = '.5rem';
    showStory.style.fontSize = '1.5rem';
    showStory.style.fontFamily = 'Arial, Helvetica, sans-serif';
    showStory.style.fontWeight = 'bold';

}