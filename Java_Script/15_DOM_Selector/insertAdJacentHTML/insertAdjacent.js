const tryBtn = document.querySelector("button");

tryBtn.addEventListener("click", MyClickFunction);

function MyClickFunction() {
  const myH2 = document.querySelector("#myH2");
  let position = document.getElementById("adJacentText").value;
  myH2.insertAdjacentHTML(position, "I am the new Text ");
}

document.querySelector(".btn").addEventListener("click", () => {
  let oldItem = document.querySelector(".myitem");
  oldItem ? oldItem.remove() : console.log("First Time");
  let position = document.getElementById("adJacentText").value;
  let list = document.querySelector(".list");
  let li = document.createElement("li");
  li.classList.add("myitem");
  li.textContent = ` I have the position ${position}`;
  list.insertAdjacentElement(position, li);
});

// Adjacent Positions

/**
 * beforeend:
 * beforebegin:
 * afterend:
 * afterbegin:
 */
