const form = document.querySelector("form");
const formInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");
console.log(select);

//form.addEventListener("submit", runEvent);

// keydown the tiger fired before the value change

// formInput.addEventListener("keydown", runEvent);
// formInput.value = "";

// keyup the tiger fired after the value change

//formInput.addEventListener("keyup", runEvent);

// keypress event
//formInput.addEventListener("keypress", runEvent);

// change event
// formInput.addEventListener("change", runEvent);

// input event
// its accept only character not other key
//formInput.addEventListener("input", runEvent);

// cut Event  the event fired before value change
//formInput.addEventListener("cut", runEvent);

// Paste Event  the event fired before value change

//formInput.addEventListener("paste", runEvent);

// Blur Event
//formInput.addEventListener("blur", runEvent);

// Focus  click inside the input or element
formInput.addEventListener("focus", runEvent);

// Event Handler

function runEvent(e) {
  //e.preventDefault();
  //heading.innerHTML = "";

  // keybord event groups
  //console.log(e.key);

  //   console.log(`Event Type :${e.type}`);

  heading.innerHTML += `Event Type:${e.type}`;
  console.log(e.target.value);
}

//......................

document.querySelector("#hi").addEventListener("click", () => {
  const input = document.querySelector("#input").focus();
});
document.querySelector("#blur").addEventListener("click", () => {
  const input = document.querySelector("#input").blur();
});

document.querySelector("#input").addEventListener("focus", (e) => {
  const para = document.querySelector("p");
  para.innerHTML = e.target.value;
});
