const express = require("express");
const handle = require("./handle/handle");

const app = express();
const admin = express();

// .................app.locals.................
app.locals.title = "My App";
// app.get("/", handle);

// ..................Sub App // mount path..................
// admin.get("/", (req, res) => {
//   console.log(admin.mountpath);
//   res.send("Welcome to admin homepage");
// });

// app.get("/", (req, res) => {
//   console.log("Welcome to homepage");

//   res.send("welcome to homepage");
// });

// app.use("/admin", admin);

// ....................app.all()..................
// app.all("/", (req, res) => {
//   res.send("using all method");
// });

//...............app.enable() & app.disable()........................

// app.enable("case sensitive routing"); // we can stop case sensitive using app.enable() method
// app.disable("case sensitive routing");

// app.get("/about", (req, res) => {
//   console.log("Enable the case sensitive routing");
//   res.send("enable case sensitive routing");
// });

// ........................app.param()................................

// app.param("id", (req, res, next, id) => {
//   //
//   const user = {
//     userId: id,
//     name: "bangladesh",
//   };
//   req.userDetails = user;
//   next();
// });

// app.get("/user/:id", (req, res) => {
//   console.log(req.userDetails);
//   res.send("Welcome to application Param");
// });

//...........................app.route()...................

// app.route("/about/mission")
//   .get((req, res) => {
//     res.send("welcome to app Home get Method");
//   })
//   .post((req, res) => {
//     res.send("welcome to app Home post Method");
//   })
//   .put((req, res) => {
//     res.send("welcome to app Home put Method");
//   })
//   .delete((req, res) => {
//     res.send("welcome to app Home delete Method");
//   });

//...................Template engine................
app.set("view engine", "ejs");
app
  .route("/about/mission")
  .get((req, res) => {
    res.render("pages/about");
  })
  .post((req, res) => {
    res.send("welcome to app Home post Method");
  })
  .put((req, res) => {
    res.send("welcome to app Home put Method");
  });

// Listening the port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The Server is running port http://localthost:${PORT}`);
});
