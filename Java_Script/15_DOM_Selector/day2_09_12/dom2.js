// Select single Element

// using ID

// document.getElementById("kaki").style.backgroundColor = "skyblue";

// document.querySelector(".fruits").style.backgroundColor = "orange";

// document.querySelector("li:nth-child(even)").style.backgroundColor = "blue";

//Selector for multiple elements
// Array.from(document.getElementsByTagName("div")).forEach(
//   (item) => (item.innerHTML += " I like it")
// );

// let input = document
//   .getElementsByName("text")
//   .forEach((element) => (element.style.margin = "3rem"));

// .............Crating Element.................

document.getElementById("div").addEventListener("click", () => {
  let tag = document.querySelector('[type="text"]').value;
  let element = document.createElement(tag);

  if (tag == "a") {
    element.classList.add("btn");
    element.classList.add("btn-primary");
    element.setAttribute("href", "https://www.google.de/");
    element.appendChild(document.createTextNode("Google"));
    element.innerHTML += `<i class="fa fa-remove"></i>`;
  } else {
    element.classList = "row";
    element.style.background = "lightblue";
  }

  document.querySelector(".fruits").appendChild(element);

  console.log(element);
});

document.getElementById("list").addEventListener("click", () => {
  let tag = document.querySelector(".in").value;
  //   let element = document.createElement(tag);

  if (tag != "li") {
    let error = document.createElement("div");
    error.classList.add("error");
    error.innerHTML = `Here you can only have list item &lt; li &gt;`;
    document.querySelector("body").appendChild(error);
    setTimeout(() => {
      error.remove();
    }, 3000);
  } else {
    let order = Array.from(document.querySelector(".ul").children).length;
    let li = document.createElement(`${tag}`);
    li.innerHTML = `I am item number ${order + 1}`;
    document.querySelector(".ul").appendChild(li);
  }
});
