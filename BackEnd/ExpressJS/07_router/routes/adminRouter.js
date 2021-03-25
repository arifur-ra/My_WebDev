//1.Importing module file What I need and define constant/global Variables
const express = require("express");
const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "../index.html");

//2.Create the Router

const adminRouter = express.Router();

//3.Create  routes with IndexRouter for Home
const routeFunction = (req, res) => {
  // response is the object that brings the server to write/send information
  res.send("Welcome to admin router");
};
adminRouter.get("/", routeFunction); // routes dor the http://localhost:4000

//3.Create  another routes with IndexRouter for indexFile
// routes dor the http://localhost:4000/IndexFile
adminRouter.get("/indexFile", (req, res) => {
  // use the response object to send a file
  console.log(filePath);

  res.sendFile(filePath);
});

// Export the Router

module.exports = adminRouter;
