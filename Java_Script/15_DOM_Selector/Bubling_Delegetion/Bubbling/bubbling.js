// onclick Handler for form

// document.querySelector("form").onclick = function (e) {
//   e.preventDefault();
//   e.target.style.backgroundColor = "yellow";

//   setTimeout(() => {
//     e.target.style.backgroundColor = "";
//   }, 4000);

//   document.querySelector(
//     ".demo"
//   ).innerHTML = `e.target ${e.target.tagName} from this ${this.tagName}`;
// };

//onclick Handler  for button
// document.querySelector("button").onclick = function (e) {
//   e.preventDefault();
//   e.stopPropagation();
//   this.style.backgroundColor = "red";
// };

///
document.querySelector("form").onclick = function (e) {
  e.preventDefault();

  alert(`this = ${this.tagName} Target =${e.target.tagName}`);
};
document.querySelector("form>div").onclick = function (e) {
  e.preventDefault();
  alert(`this = ${this.tagName} Target =${e.target.tagName}`);
};
document.querySelector("form>div>p").onclick = function (e) {
  e.preventDefault();
  alert(`this = ${this.tagName} Target =${e.target.tagName}`);
};
