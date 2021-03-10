const path = require("path"); // its a code module already exist in nodeJs
// console.log(path);
// get the base file  name(path.basename)

// console.log(__filename);
// console.log(path.basename(__filename)); // return the path_demo.js
console.log(path.dirname(__filename)); // return the directory for the  path_demo.js file

// get file extension
console.log(path.extname(__filename));

// Create path Object: (path.parse)
const obj = path.parse(__filename);

console.log(obj);

// Joining the two patch
const newPath = path.join(__dirname, "test", "index.js");

console.log(newPath);
