/**
 * create a text area element
 * get the box element
 * add listener to box listens to click event
 * add listener to the text area to listen to keydown
 * check if the key is enter use blur method to the area
 *
 * add other listen to area listens to blur event
 * in thr handler of blur event assign the value of the area to the box inner html
 */

// Create the text area element

const box = document.querySelector(".box"); // bring the box class
box.addEventListener("click", editTextArea);
let textArea = null;

function editTextArea() {
  textArea = document.createElement("textarea");
  textArea.classList.add("text");
  //   textArea.className = "text"; // another way to add className
  textArea.value = box.innerHTML;

  // addEventListener to the textarea listen to 'keydown', // keydown event handler is
  textArea.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      this.blur();
    }
  });
  // addEventListener to the textarea listen to 'blur',

  textArea.addEventListener("blur", () => {
    box.innerHTML = textArea.value;
    textArea.replaceWith(box);
  });

  box.replaceWith(textArea);
  textArea.focus();
}
