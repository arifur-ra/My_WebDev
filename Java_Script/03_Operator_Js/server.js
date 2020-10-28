// import the node pakage
let express = require('express');
let liveReload = require('livereload');
let connectliveReload = require('connect-livereload');

// creating the two server express and livereload server

let server = express();
let liveReloadServer = liveReload.createServer();

// using middleware functions
server.use(connectliveReload());
server.use(express.static('public'));
liveReloadServer.watch('public');

let port = 5000;
server.listen(port, function () {
    console.log(`server is listening to the port ${port}`);
});