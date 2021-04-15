const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // this package connected to help our mongodb database

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// connect to the database

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connected successfully");
});

// Importing the router and use it in server
// const exercisesRouter = require("./routes/exercise");
// const userRouter = require("./routes/users");

// app.use("/exercise", exercisesRouter);
// app.use("/users", userRouter);

// listening the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
