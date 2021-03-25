// Types Of Middleware
/**
 * 1.Application level middleware // app.use()
 * 2.Router level middleware  // router.use()
 * 3.Error handling middleware
 * 4. Built in middleware  like express.jason(), express.static()
 * 5. third-party middleware like cookies.parser()
 */

const express = require("express");
const app = express();

// const myMiddleware = (req, res, next) => {
//   console.log("I am Logging");
//   next();
// };

const logger = (req, res, next) => {
  console.log(
    `${new Date(Date.now()).toLocaleString()} - ${req.method}- ${
      req.originalUrl
    }-${req.protocol} - ${req.ip}`
  ); // get the exact time and good format
  next();
};
// app.use(myMiddleware); // i am using my middleware
app.use(logger); // i am using my middleware

app.get("/about", (req, res) => {
  res.send("About");
});

// Listen to Port

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`The server listening the http://localhost :${PORT}`);
});
