// brig the whole table

//let table = document.querySelector("#courseTable");
// table.onclick = function (e) {
//   let Target = e.target;
//   //   console.log(Target);
//   Target.classList.add("highlights");
//   // while (Target != this) {
//   //   if (Target.tagName == "TD") {
//   //     Target.classList.add("highlights");
//   //     return true;
//   //   }
//   //}
// };

//table.addEventListener("click", tdEditFunction);

// let cellTd = document.querySelectorAll("TD");
// console.log(cellTd);

//cellTd.addEventListener("click", tdEdit);

cellTd.forEach((item) => {
  item.addEventListener("click", tdEdit);
});

let textArea = null;

function tdEdit(e) {
  textArea = document.createElement("textarea");
  textArea.classList.add("text");
  textArea.value = cellTd.innerHTML;

  textArea.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      this.blur();
    }
  });

  textArea.addEventListener("blur", () => {
    cellTd.innerHTML = textArea.value;
    textArea.replaceWith(cellTd);
  });
  cellTd.replaceWith(textArea);
  textArea.focus();
}
