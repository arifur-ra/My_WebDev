const fs = require("fs");
const patch = require("path");

// Create the Public folder

// fs.mkdir(patch.join(__dirname, "/public"), {}, (err) => {
//   if (err) throw err;
//   console.log(" Public Folder Created...");
// });

// Create the Sub folder inside the Public

// fs.mkdir(patch.join(__dirname, "/public", "HTML"), {}, (err) => {
//   if (err) throw err;
//   console.log("subFolder created...");
// });

// create a file inside the public folder

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

// fs.writeFile(
//   patch.join(__dirname, "/public", "index.html"),
//   template,
//   (err) => {
//     if (err) throw err;
//     console.log("File created...");
//   }
// );
// Crete  two file inside the HTML folder

// fs.writeFile(
//   patch.join(__dirname, "/public/HTML", "about.html"),
//   template,
//   (err) => {
//     if (err) throw err;
//     console.log("File created...");
//   }
// );

// fs.writeFile(
//   patch.join(__dirname, "/public/HTML", "home.html"),
//   template,
//   (err) => {
//     if (err) throw err;
//     console.log("File created...");
//   }
// );

// Create a style.css file inside the CSS folder
const cssStyle = `body {
  background-color: brown;
}`;

// fs.writeFile(
//   patch.join(__dirname, "/public/CSS", "style.css"),
//   cssStyle,
//   (err) => {
//     if (err) throw err;
//     console.log(" Style.css file is created inside CSS folder...");
//   }
// );

// Create a file named users.json in public,it should be include array

const users = [
  { name: "Arif", class: "Fbw39", id: 00 },
  { name: "Ayaan", class: "Fbw39", id: 01 },
  { name: "Abir", class: "Fbw39", id: 02 },
];

// fs.writeFile(
//   patch.join(__dirname, "/public", "users.json"),
//   JSON.stringify(users),
//   (err) => {
//     if (err) throw err;
//     console.log("Users file created with an array is saved into it");
//   }
// );

// read a file named users.json , and console only users names

fs.readFile(
  patch.join(__dirname, "public", "users.json"),
  "utf8",
  (err, users) => {
    if (err) throw err;
    users = JSON.parse(users);
    users.forEach((element) => {
      console.log(element.name);
    });
  }
);
