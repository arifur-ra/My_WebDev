// Import the Library What I need

const express = require("express");

// Middleware
const app = express();

app.get("/", (req, res) => {
  res.send("This is My First Server");
  console.log("start");
});

app.post("/form", (req, res) => {
  res.send("This is the post request from Form");
  console.log("start");
});

// Listen to the port

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`The Server is listening http://localhost: ${PORT}`);
});
