///

document.querySelector(".error").style.display = "none";

document.querySelector("button").addEventListener("click", () => {
  let num = document.getElementById("number");
  if (num.value < 1 || num.value > 8) {
    document.querySelector(".error").style.display = "block";
    setTimeout(() => {
      document.querySelector(".error").style.display = "none";
    }, 3000);
  } else {
    document.querySelectorAll("li").forEach((li) => (li.style.background = ""));

    document.querySelector(`li:nth-child(${num.value})`).style.backgroundColor =
      "yellow";
  }
});

/**
 * create input to enter a name
 * when you click add button do below :
 * push the name into an array
 * set the array to the localStorage with a key fbw39
 * present the names in an ul
 * send me a screen shot once you have either problem or correct result*/

document.querySelector(".add").addEventListener("click", () => {
  let name = document.getElementById("names").value;

  let students = JSON.parse(localStorage.getItem("fbw39"));

  // if (students) {
  //   students.push(name);
  // } else {
  //   students = [name];
  // }

  // (ternary) operator
  students ? students.push(name) : (students = [name]);
  localStorage.setItem("fbw39", JSON.stringify(students));
  document.getElementById("names").value = ``;

  let list = document.querySelector(".nameList");
  list.innerHTML = "";

  students.forEach((student) => {
    let li = document.createElement(`li`);
    li.innerHTML += `${student}`;
    li.classList.add("listofName");
    li.innerHTML += `<i class="fas fa-trash-alt" onclick="removeItem()" id =${student}></i>`;

    list.appendChild(li);
  });
});

document.querySelector(".show").addEventListener("click", () => {
  let students = JSON.parse(localStorage.getItem("fbw39"));

  if (!students) students = [];
  localStorage.setItem("fbw39", JSON.stringify(students));
  document.getElementById("names").value = ``;
  let list = document.querySelector(".nameList");
  list.innerHTML = "";

  students.forEach((student) => {
    let li = document.createElement(`li`);
    li.classList.add("listofName");

    li.innerHTML += `${student}`;
    li.innerHTML += `<i class="fas fa-trash-alt" onclick="removeItem()" id =${student}></i>`;
    list.appendChild(li);
  });
});

const removeItem = () => {};
