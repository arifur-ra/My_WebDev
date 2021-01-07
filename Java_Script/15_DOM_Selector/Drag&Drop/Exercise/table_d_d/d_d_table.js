let arif = document.querySelector(".arif");
console.log(arif);

arif.onmousedown = function (event) {
  // 1..prepare to move
  arif.style.position = "absolute";
  arif.style.zIndex = "1000";

  // take it out of any current parents , into body;
  document.body.append(arif);

  // center the name at (pageX,pageY) coordinates

  function moveName(x, y) {
    arif.style.left = x - arif.offsetWidth / 2 + "px";
    arif.style.top = y - arif.offsetHeight / 2 + "px";
  }
  moveName(event.pageX, event.pageY);

  // 2..Move the box width on mousemove
  document.addEventListener("mousemove", onMouseMove);
  function onMouseMove() {
    moveName(event.pageX, event.pageY);
  }

  arif.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);
  });
};
