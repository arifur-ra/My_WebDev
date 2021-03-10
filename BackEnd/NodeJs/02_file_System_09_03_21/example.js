const fileSystem = require("fs");
const patch = require("path");

// to create a folder
// fileSystem.mkdir(patch.join(__dirname, "/newFolder"), {}, (err) => {
//   if (err) throw err;
//   console.log(`Folder Created...`);
//   console.log(__dirname);
// });

// Create sub Folder inside the newFolder

// fileSystem.mkdir(patch.join(__dirname, "/newFolder"), {}, (err) => {
//   if (err) throw err;
//   console.log(`SubFolder Created...`);
//   console.log(__dirname);
// });

// removed the Folder

// fileSystem.rmdir(patch.join(__dirname, "/newFolder"), {}, (err) => {
//   if (err) throw err;
//   console.log(`Folder removed`);
//   console.log(__dirname);
// });

// Create a file and Write to it
const data = "{data:['Arif','Ayaan']}"; // data must be stringified

// fileSystem.writeFile(
//   patch.join(__dirname, "/newFolder", "index.html"),
//   data,
//   (err) => {
//     if (err) throw err;
//     console.log(`File created with data written to it`);
//   }
// );

// Append to File
const newData = "\n {data:['Rahman','Musfiqur']}"; // data must be stringified

// fileSystem.appendFile(
//   patch.join(__dirname, "/newFolder", "index.js"),
//   newData,
//   (err) => {
//     if (err) throw err;
//     console.log(`Appended ${newData} inside the index.html `);
//   }
// );

// Read file

// fileSystem.writeFile(
//   patch.join(__dirname, "/newFolder", "index.txt"),
//   "Hello Fbw39",
//   (err) => {
//     if (err) throw err;
//     console.log(`File created with data written to it`);
//   }
// );

// fileSystem.readFile(
//   patch.join(__dirname, "newFolder", "index.txt"),
//   " utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// Rename the file

fileSystem.rename(
  patch.join(__dirname, "newFolder", "index.txt"),
  patch.join(__dirname, "newFolder", "index.js"),
  (err) => {
    if (err) throw err;
    console.log(`File rename index.txt to index.js`);
  }
);
