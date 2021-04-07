//1.Import modules and files that I need
const express = require("express");
const logger = require("morgan");

// routes
const listUserRouter = require("./routes/listUserRouter");
const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");

// End of the first steps

//2.Create express application, use middleware and configure the app

const app = express();
// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// End of 2nd Step

//3. Define the behaviour of the app, create the routes

app.use("/list", listUserRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

//4. Start listening the port

const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The listening on port is http://localhost:${PORT}`);
  }
});
