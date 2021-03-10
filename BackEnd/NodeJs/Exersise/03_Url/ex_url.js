// const myUrl = new URL(
//   "https://digitalcareerinstitute.org/courses/web-development-course"
// );

//const { listenerCount } = require("process");
//const { URL } = require("url");

// const sMyUrl = myUrl.toString();
// console.log(sMyUrl);

const breakURL = () => {
  const value = document.getElementById("url").value;
  const myUrl = new URL(value);
  const array = myUrl
    .toString()
    .split("/")
    .filter((element) => element.length > 0);
  //   array.filter((element) => {
  //     element.length > 0;
  //   });
  const display = document.getElementById("list");
  display.innerHTML = ``;
  array.forEach((element) => {
    display.innerHTML += `<li>${element}</li>`;
  });
};

document.getElementById("url").value = ``;
