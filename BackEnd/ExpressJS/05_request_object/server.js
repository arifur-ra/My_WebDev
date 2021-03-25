// some Properties for Request
/**
 * req.baseUrl || req.originalUrl || req.path || req.hostname ||req.ip ||req.method (get,post,put)
 * req.protocol|| req.params || req.query || req.body || req.cookies
 * req.signed cookies || req.secure
 *
 */

const express = require("express");
const app = express();

//.................. req.baseUrl..................

// just make another sub route using router function

// const adminRoute = express.Router();

// adminRoute.get("/dashboard", (req, res) => {
//   console.log(req.baseUrl);

//   res.send("We are in admin route");
// });
// app.use("/admin", adminRoute);

// app.get("/user/:id", (req, res) => {
//   console.log(req.baseUrl);

//   res.send("Request");
// });

// ...............req.originalUrl.................

// app.get("/user/:id", (req, res) => {
//   console.log(req.originalUrl);

//   res.send("Request");
// });

// ...............req.Url.................

// app.get("/user/:id", (req, res) => {
//   console.log(req.originalUrl);
//   console.log(req.url);

//   res.send("Request");
// });
// ...............req.path.................

// app.get("/user/:id", (req, res) => {
//   console.log(req.path);

//   res.send("Request");
// });

// ...............req.path.................

// app.get("/user/:id", (req, res) => {
//   console.log(req.path);

//   res.send("Request.path");
// });
// ...............req.hostname.................

// app.get("/user/:id", (req, res) => {
//   console.log(req.hostname);

//   res.send("Request.hostname");
// });

// // ...............req.ip// protocol.................

app.get("/user/:id", (req, res) => {
  console.log(req.ip);
  console.log(req.protocol);

  res.send("Request.ip");
});

app.listen(4000, () => {
  console.log("Listening the port http://localhost:4000");
});
