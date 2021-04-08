const express = require("express");
const app = express();

// serve the static file
app.use(express.static("/home/dci/Github_Website/justify-content"));

const port = 2022;
app.listen(port, function () {
  console.log(`server is running port: ${port}`);
});