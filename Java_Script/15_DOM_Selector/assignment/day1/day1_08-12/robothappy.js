// Main Background
let main = document.getElementById("main");
main.style.backgroundColor = "turquoise";
main.style.width = "50rem";
main.style.height = "50rem";
main.style.margin = "auto";
main.style.padding = "2rem";

let head = document.querySelector(".head");
head.style.backgroundColor = "black";
// head.style.position = "absolute";
head.style.width = "10rem";
head.style.height = "8rem";
head.style.margin = "1rem auto";
head.style.borderTopRightRadius = "25px";
head.style.borderTopLeftRadius = "25px";

// for Eye

let eye = document.querySelector(".eye");
eye.style.position = "absolute";
eye.style.backgroundColor = "white";
eye.style.width = "1.5rem";
eye.style.height = "1.5rem";
eye.style.margin = "2rem 2rem";

let eye1 = document.querySelector(".eye1");
eye1.style.position = "absolute";
eye1.style.backgroundColor = "white";
eye1.style.width = "1.5rem";
eye1.style.height = "1.5rem";
eye1.style.margin = "2rem 6rem";

// for Mouth

let mouth = document.querySelector(".mouth");
mouth.style.position = "absolute";
mouth.style.backgroundColor = "white";
mouth.style.width = "5.5rem";
mouth.style.height = "1.5rem";
mouth.style.margin = "5rem 2rem";
mouth.style.borderBottomRightRadius = "25px";
mouth.style.borderBottomLeftRadius = "25px";

// body

let body = document.getElementById("body");
body.style.backgroundColor = "black";
body.style.width = "20rem";
body.style.height = "10rem";
body.style.margin = "auto";
body.style.borderBottomRightRadius = "25px";
body.style.borderBottomLeftRadius = "25px";

let text = document.querySelector(".text");
text.style.color = "white";
text.fontWeight = "bold";
text.style.fontSize = "1.5rem";
text.style.padding = "3.5rem 5rem";
text.style.margin = " 4rem auto";

let body1 = document.querySelector(".body1");
body1.style.position = "absolute";
body1.style.backgroundColor = "mediumpurple";
body1.style.width = "2rem";
body1.style.height = "5.5rem";
body1.style.margin = "0rem 0rem";

let body2 = document.querySelector(".body2");
body2.style.position = "absolute";
body2.style.backgroundColor = "mediumpurple";
body2.style.width = "2rem";
body2.style.height = "5.5rem";
body.style.top = "0";
body2.style.margin = "-12.7rem 18rem";

// down

// let down = document.getElementById("down");
// down.style.position = "relative";

let leg = document.querySelector(".leg");
leg.style.position = "absolute";
leg.style.backgroundColor = "mediumpurple";
leg.style.width = "2rem";
leg.style.height = "4.5rem";
leg.style.margin = "0rem 20rem";

let leg1 = document.querySelector(".leg1");
leg1.style.position = "absolute";
leg1.style.backgroundColor = "mediumpurple";
leg1.style.width = "2rem";
leg1.style.height = "4.5rem";
leg1.style.margin = "0rem 28rem";

//Smile change

smileChange = () => {
  mouth.style.backgroundColor = "red";
};
