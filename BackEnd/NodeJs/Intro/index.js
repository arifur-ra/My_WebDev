const http = require("http");
// console.log(http);

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content Type": "text/html" });
    res.end("Hello Fbw39 !!!");
  })
  .listen(8080);
