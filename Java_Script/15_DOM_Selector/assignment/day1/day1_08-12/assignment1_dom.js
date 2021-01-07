/*
 * Create a table in the html file
 * give the table an id
 * in the head element there should be <th> with word Age :
 * create a form with name attribute search
 * the task : use querySelector
 * bring the age <th>
 * bring the form with attribute name=search
 * bring the whole table
 * bring the whole body
 * list of the whole elements inside body
 *
 */

//select the submit input in the form search

let searchElement = document.querySelector('form [value="search"]');
console.log(searchElement);

searchElement.addEventListener("click", (event) => {
  event.preventDefault();
  //let input = document.querySelector('form [type="text"]');
  let form = document.querySelector("form");
  console.log(form["search"].value);
});
