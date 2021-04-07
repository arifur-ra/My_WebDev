//1.Importing module file What I need and define constant/global Variables
const express = require("express");

//2.Create the Router

const publicRouter = express.Router();

// Middleware

const log = (req, res, next) => {
  console.log("I am logging Somethings");
  next();
};

publicRouter.all("*", log);

//3.Create  routes with IndexRouter for Home
const routeFunction = (req, res) => {
  // response is the object that brings the server to write/send information
  res.send("Welcome to Public Router");
};
publicRouter.get("/", routeFunction); // routes dor the http://localhost:4000

//3.Create  another routes with IndexRouter for indexFile
// routes dor the http://localhost:4000/IndexFile
publicRouter.get("/about", (req, res) => {
  // use the response object to send a file
  res.send("Welcome to About us Pages");
});

// Export the Router

module.exports = publicRouter;
