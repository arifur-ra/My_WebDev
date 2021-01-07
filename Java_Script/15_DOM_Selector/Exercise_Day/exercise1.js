/**
 * # DOM-toggle button

1. Create a button with the text 'Show favorite destinations'.

2. Create a ul tag with five of your favorite destinations as li tags.

3. Create an event listener on the button. When the button is clicked for the first
   time show the ul and it's contents. Change the button text to 'Let's go!!!'

   When the button is clicked again, hide the ul and it's contents and change the
   button text back to 'Show favorite destinations'.

 */

document.querySelector("input").addEventListener("click", () => {
  let dis = document.querySelector("ul");
  dis.style.display = "block";
  const btn = (document.getElementById("btn").value = "Let' Go");
});
