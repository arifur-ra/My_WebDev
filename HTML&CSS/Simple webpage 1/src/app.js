const express = require("express");
const server = express();

// serve the static folder

server.use(express.static("/home/dci/Github_Website/simpleWebsite1"));

const port = 2020;
server.listen(port, function () {
  console.log(`Server is runnig port :${port}`);
});