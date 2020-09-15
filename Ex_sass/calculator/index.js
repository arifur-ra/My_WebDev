const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
//create Server
const server = express();
const liveReloadServer = livereload.createServer();
// middleware
server.use(connectLiveReload());
server.use(express.static("dist"));
liveReloadServer.watch("dist");

const port = 3133;

server.listen(port, function () {
    console.log(`Server is listening to the port ${port}`);
});