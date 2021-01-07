let sBox = document.querySelector(".sBox");
let currentElement = null;

sBox.onmousedown = function (event) {
  // 1--Prepare to move
  // make absolute and on top
  sBox.style.position = "absolute";
  sBox.style.zIndex = "1000";
  // take it out of any current parents into body
  document.body.append(sBox);
  // centers the box at (pageX,pageY) coordinates
  function moveAt(x, y) {
    sBox.style.left = x - sBox.offsetWidth / 2 + "px";
    sBox.style.top = y - sBox.offsetHeight / 2 + "px";
  }
  // move the absolutely position box under the pointer
  moveAt(event.pageX, event.pageY);

  //2-- move the box with on mousemove

  document.addEventListener("mousemove", onMouseMove);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
    sBox.hidden = true;
    let element = document.elementFromPoint(event.clientX, event.clientY);
    sBox.hidden = false;
    // if (!targetElement) return;
    if (!element) return;
    let targetElement = element.closest(".lBox");
    console.log(` current Elemet:${currentElement} target:${targetElement}
    first condition:${currentElement != targetElement} Second Condition:${
      currentElement != null
    }`);
    if (currentElement != targetElement) {
      if (currentElement) {
        exitMyTarget(currentElement);
      }
      currentElement = targetElement;
      if (currentElement) {
        enterMyTarget(currentElement);
      }
    }
  }
  // drop the box with mouseup and remove unneeded handlers

  sBox.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);
  });
};

function enterMyTarget(node) {
  node.style.backgroundColor = "yellow";
  node.style.color = "red";
  sBox.innerHTML = node.innerHTML;
  sBox.style.backgroundColor = "pink";
  setTimeout(() => {
    sBox.innerHTML = ``;
    sBox.style.backgroundColor = ``;
  }, 5000);
}

function exitMyTarget(node) {
  node.style.backgroundColor = ``;
  node.style.color = `white`;
}
