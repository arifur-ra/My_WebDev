//EX2
/**
 * create in the html file three different 'div' elements.
 * create in the css file three classes named box1 box2 box3
 * in js file do the below :
 * get the div elements by tag name
 * assign box1 to the first div 
 * assign box2 to the second div 
 * assign box3 to the third div 
 */
const elementsCollection = document.getElementsByTagName('div');
elementsCollection[0].classList.add('box1');
elementsCollection[0].innerHTML = ' <h1> Box1</h1> ';

elementsCollection[1].classList.add('box2');
elementsCollection[1].innerHTML = ' <h1> Box2</h1> ';

elementsCollection[2].classList.add('box3');
elementsCollection[2].innerHTML = ' <h1> Box3</h1> ';


console.log(elementsCollection[2]);