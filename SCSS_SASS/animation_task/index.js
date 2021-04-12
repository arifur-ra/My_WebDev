const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const path = require("path");
const {
    dirname
} = require("path");

//create Server
const server = express();
const liveReloadServer = livereload.createServer();

//use the  middleware function
server.use(connectLiveReload());
//console.log(path.join(__dirname, "public"));
server.use(express.static(path.join(__dirname, "public")));
//watch the change to inside in folder 'public'
liveReloadServer.watch(path.join(__dirname, "public"));

const port = 3135;

server.listen(port, function () {
    console.log(`Server is listening to the port ${port}`);
});