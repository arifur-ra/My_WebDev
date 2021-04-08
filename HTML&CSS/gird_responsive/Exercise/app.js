const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
// create two server
const server = express();
const liveReloadServer = livereload.createServer();
// use middale ware 
server.use(connectLiveReload());
server.use(express.static("/home/dci/github_Web/gird_responsive/Exercise"));

// see the live change the browser
liveReloadServer.watch("/home/dci/github_Web/gird_responsive/Exercise ");

const port = 2022;

server.listen(port, function () {
  console.log(`Server is listening to the port ${port}`);
});