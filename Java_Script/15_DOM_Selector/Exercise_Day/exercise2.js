/**
 * ### Task 1

1. Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded.
 You can do this either using window.onload or adding an event listener for DOMContentLoaded.

2. Replace the text "Change me" with "Hello World!".

3. When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

4. Create a new div element.

5. Give your new div a class of purple and style it so that it has a background color of purple.

6. Append your new div to the page to the section tag.

 */

document.addEventListener("DOMContentLoaded", () => {
  let head = document.querySelector("h1");
  head.textContent = "Hello World ✋";
  let section = document.querySelector("section");
  let div = document.createElement(`div`);
  div.classList.add("purple");
  section.appendChild(div);

  document.querySelector(".brown").addEventListener("mouseover", () => {
    document.querySelector(".brown").innerHTML = "Brown";
    // document.querySelector(".brown").style.padding = "1rem";
    document.querySelector(".brown").style.background = "none";
    document.querySelector(".brown").style.color = "brown";
    document.querySelector(".brown").style.fontSize = "2rem";
    document.querySelector(".brown").style.fontWeight = "bold";
  });
  document.querySelector(".brown").addEventListener("mouseout", () => {
    document.querySelector(".brown").remove(brown);
  });

  document.querySelector(".green").addEventListener("mouseover", () => {
    document.querySelector(".green").innerHTML = "Green";
    // document.querySelector(".green").style.padding = "1rem";
    document.querySelector(".green").style.background = "none";
    document.querySelector(".green").style.color = "green";
    document.querySelector(".green").style.fontSize = "2rem";
    document.querySelector(".green").style.fontWeight = "bold";
  });
  document.querySelector(".blue").addEventListener("mouseover", () => {
    document.querySelector(".blue").innerHTML = "Blue";
    // document.querySelector(".blue").style.padding = "1rem";
    document.querySelector(".blue").style.background = "none";
    document.querySelector(".blue").style.color = "blue";
    document.querySelector(".blue").style.fontSize = "2rem";
    document.querySelector(".blue").style.fontWeight = "bold";
  });
  document.querySelector(".yellow").addEventListener("mouseover", () => {
    document.querySelector(".yellow").innerHTML = "Yellow";
    // document.querySelector(".yellow").style.padding = "1rem";
    document.querySelector(".yellow").style.background = "none";
    document.querySelector(".yellow").style.color = "yellow";
    document.querySelector(".yellow").style.fontSize = "2rem";
    document.querySelector(".yellow").style.fontWeight = "bold";
  });
  document.querySelector(".purple").addEventListener("mouseover", () => {
    document.querySelector(".purple").innerHTML = "Purple";
    // document.querySelector(".purple").style.padding = "1rem";
    document.querySelector(".purple").style.background = "none";
    document.querySelector(".purple").style.color = "purple";
    document.querySelector(".purple").style.fontSize = "2rem";
    document.querySelector(".purple").style.fontWeight = "bold";
  });
});
