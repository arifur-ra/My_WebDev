// Event Listeners

document.querySelector("#section").addEventListener("click", (e) => {
  // e.target.innerHTML = "Hey people";

  // the target element

  // val = e.target;
  // val = e.target.id;
  // val = e.target.className;
  // val = e.target.classList;
  // // Event
  // val = e.type;

  // // Timestamp
  // let day = Date.now();
  // let stamp = e.timeStamp;
  // // console.log(stamp);
  // val = new Date(e.timeStamp + day);

  // // coords event relative to the window

  // let y = e.clientY;
  // let x = e.clientX;
  // y = e.offsetY;
  // x = e.offsetX;
  // //console.log(x, y);

  //

  e.target.classList.toggle("she");
  let styleObj = window.getComputedStyle(e.target);
  let left = parseInt(styleObj.getPropertyValue("left").replace("px", ""));
  e.target.style.left = left + e.clientX / 3 + "px";
  console.log(left, e.clientX);
});
