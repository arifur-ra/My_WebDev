let table = document.querySelector("#courseTable");

table.onclick = function (e) {
  let classnames = e.target.className;

  const cellTd = document.querySelector("[class=" + classnames + "]");
  console.log(cellTd);

  let textArea = null;
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
};
