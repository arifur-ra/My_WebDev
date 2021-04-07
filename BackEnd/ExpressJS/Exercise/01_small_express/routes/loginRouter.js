const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.post("/", (req, res) => {
  const body = req.body;

  loginController
    .checkUser(body)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log(error);
      res.send("Wrong Information");
    });
});

module.exports = router;
