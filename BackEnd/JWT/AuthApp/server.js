require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const Users = [
  {
    id: "1",
    username: "Mark",
  },
  {
    id: "2",
    username: "Gilles",
  },
  {
    id: "3",
    username: "Lorianne",
  },
];

const Teas = [
  {
    name: "Tea",
    description: "This is a very tasty tea.",
  },
  {
    name: "Tea 2",
    description: "This is a very tasty tea 2.",
  },
  {
    name: "Tea 3",
    description: "This is a very tasty tea 3.",
  },
];

/**This route goes to the list of teas */
app.get("/teas", authenticateToken, (req, res) => {
  res.json(Teas);
});

// app.post('/login', (req, res) => {

//     //username is being supplied
//     const username = req.body.username;
//     const id = req.body.userID;

//     //authenticate is this the correct user???? is it the correct password?

//     const user = {id:id, name:username}

//     //we dit all the checks and the user credentials are valid!
//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

//     res.json({accessToken:accessToken});

// });

//middleware function to authenticate token
function authenticateToken(req, res, next) {
  //Bearer token
  const authHeader = req.headers["authorization"]; //there's a bearer token in here
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    //status unauthorized
    return res.sendStatus(401);
  }

  //we have found a token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

const port = 3000;
app.listen(port, console.log(`Server running port on :${port}`));
