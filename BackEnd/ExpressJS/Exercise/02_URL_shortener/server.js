// import the necessary requirement

const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.set("view engine", "ejs");

// GET

app.get("/", (req, res) => {
  res.render("index", { myVariable: "My name is Arif!" });
});

app.post("/short", (req, res) => {
  const db = mongoose.connection.db;
  // insert the record in 'test' collection

  res.json({ ok: 1 });
});

// Listening the port
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`The Server is running Port :${PORT}`);
});
