const express = require("express");
const server = express();

// serve use to static file

server.use(
  express.static("/home/dci/Fbw_39/My_LiveCode/WebDeb/CSS/Gird/public")
);

const port = 2030;
server.listen(port, function () {
  console.log(`Server is Running port: ${port}`);
});
