const express = require('express');
const sassMiddleware = require('node-sass-middleware');

const port = 2022;
const server = express();

server.use(
    sassMiddleware({
        src: "src",
        dest: "public",
        debag: true,
        outputStyle: "compressed"
    })
)
server.use(express.static('public'));
server.listen(port, console.log(`Server is running ${port}`));