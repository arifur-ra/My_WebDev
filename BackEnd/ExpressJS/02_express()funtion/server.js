const express = require("express");
const app = express();

// app.use(express.text());   // except the row text data
// app.use(express.json());  // except the row json object
//app.use(express.urlencoded()); // except the urlencoded object like form

app.use(express.static(__dirname + "./public/")); // express static method

app.get("/", (req, res) => {
  res.send("Tish is my first Server");
});
app.post("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running port http//:localhost:3000");
});
