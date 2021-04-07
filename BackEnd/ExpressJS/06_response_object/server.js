// Importing what I need........

const express = require("express");
const path = require("path");

const filePath = path.join(__dirname, "./public/index.html");
const app = express();

//

app.get("/user", (req, res) => {
  res.sendFile(filePath);
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`The Server is Listening port // http:localhost:${PORT}`);
});
