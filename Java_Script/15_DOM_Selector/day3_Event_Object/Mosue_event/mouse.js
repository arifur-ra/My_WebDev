const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const taskTitle = document.querySelector("h5");

// Click
// mousedown: mouseup: click:doubleClick;
//clearBtn.addEventListener("click", eventHandler);

// Click On card
//card.addEventListener("click", eventHandler);

// Double Click
//clearBtn.addEventListener("dblclick", clickEventHandler);

// Mouse down
// trigger when the mouse button is clicked ,and before its released
//clearBtn.addEventListener("mousedown", eventHandler);

// Mouse up
//clearBtn.addEventListener("mouseup", eventHandler);

//Mouse Move
card.addEventListener("mousemove", eventHandler);

// Event Handler
function eventHandler(e) {
  // e.target;
  e.preventDefault();
  //console.log(`Event Type ${e.type}`);
  //taskTitle.textContent = `MouseX${e.offsetX},MouseY ${e.offsetY}`;
  let x = e.offsetX;
  x += 15;
  let y = e.offsetY;
  y += 10;
  document.body.style.backgroundColor = `rgb(${x},${y},${x + y})`;
}

//using  jquery  mouseover:mouseenter:mousemove

let x = 0,
  y = 0,
  z = 0;
$(document).ready(function () {
  $("div.over").mouseover(function () {
    $(".over span").text((x += 1));
  });
  $("div.enter").mouseenter(function () {
    $(".enter span").text((y += 1));
  });
  $("div.move").mousemove(function () {
    $(".move span").text((z += 1));
  });
});
