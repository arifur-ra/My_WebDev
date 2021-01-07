let btrTry = document.querySelector("#tryIt");

btrTry.addEventListener("click", myFunction);

function myFunction() {
  let span = document.getElementById("mySpan");
  let element = document.getElementById("myDiv");
  let result = element.contains(span);
  let element1 = document.getElementById("para1");
  let result1 = element.contains(element1);

  document.querySelector(
    ".demo"
  ).innerHTML = `The ${element.nodeName} is including span. <span class="result"> ${result1}</span>`;
}
