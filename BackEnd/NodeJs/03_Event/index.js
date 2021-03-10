const Logger = require("./logger");
const fs = require("fs");
const path = require("path");

const subscribe = new Logger();
fs.writeFile(path.join(__dirname, "log-file.txt"), "March10, 2021", (err) => {
  if (err) throw err;
  console.log("File Created");
});

subscribe.on("wrong", (data) => {
  fs.appendFile(
    path.join(__dirname, "log-file.txt"),
    JSON.stringify(data, null, "\t"),
    (err) => {
      if (err) throw err;
      console.log("data has been logged");
    }
  );
});
subscribe.on("success", (data) =>
  fs.appendFile(
    path.join(__dirname, "log-file.txt"),
    JSON.stringify(data, null, "\t"),
    (err) => {
      if (err) throw err;
      console.log("data has been logged");
    }
  )
);

subscribe.log(`Failed to connect with the website`, `tech-error`);
subscribe.log(`Subscribe to Premium`, `Premium`);
