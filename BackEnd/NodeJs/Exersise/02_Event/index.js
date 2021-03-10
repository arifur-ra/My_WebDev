const SubscribeLogger = require("./subslogger");
//const fs = require("fs");
//const path = require("path");

const subscribe = new SubscribeLogger();

const subCount = 101;

// fs.writeFile(
//   path.join(__dirname, "Logger", "subscribe.txt"),
//   "March 10 2021",
//   (err) => {
//     if (err) throw err;
//     console.log("Folder & file Created...");
//   }
// );

// subscribe.on("wrong", (data) => {
//   fs.appendFile(
//     path.join(__dirname, "subscribe.txt"),
//     JSON.stringify(data, null, "\t"),
//     (err) => {
//       if (err) throw err;
//       console.log("Can't Subscribes");
//     }
//   );
// });

// subscribe.on("success", (data) => {
//   fs.appendFile(
//     path.join(__dirname, "subscribe.txt"),
//     JSON.stringify(data, null, "\t"),
//     (err) => {
//       if (err) throw err;
//       console.log("Subscribed successfully");
//     }
//   );
// });
subscribe.on("success", (data) => console.log(data));
subscribe.on("error", (data) => console.log(data));

subscribe.sub(subCount);
