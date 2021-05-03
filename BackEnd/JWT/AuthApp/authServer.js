require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const Users = [
    {
        id:'1',
        username:'Mark'
    },
    {
        id:'2',
        username:'Gilles'
    },
    {   
        id:'3',
        username:'Lorianne'
    }

]

const Teas = [
    {
        name:'Tea',
        description:'This is a very tasty tea.'
    },
    {
        name:'Tea 2',
        description:'This is a very tasty tea 2.'
    },
    {
        name:'Tea 3',
        description:'This is a very tasty tea 3.'
    }
]

let refreshTokens = [];



app.post('/login', (req, res) => {

    //username is being supplied
    const username = req.body.username;
    const id = req.body.userID;
    

    //authenticate is this the correct user???? is it the correct password?

    const user = {id:id, name:username}

    //we dit all the checks and the user credentials are valid!
    const accessToken = generateAccessToken(user);

    const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken);

    res.json({accessToken:accessToken, refreshToken:refreshToken});

});

app.post('/token', (req,res) => {
    //this is the refreshtoken being sent
    const refreshToken = req.body.token;
    //was it supplied in the body of the request? 
    if(refreshToken == null){
        return res.sendStatus(401);
    }
    //did we generate this?
    if(!refreshTokens.includes(refreshToken)){
        return res.sendStatus(403);
    }

    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
       if(err) return res.sendStatus(403)
        //we have to send a new access token
        const accessToken = generateAccessToken({id:user.id, name:user.name})

        res.json({accessToken:accessToken});
    });
});

app.delete('/logout', (req,res) => {
    //invalidate token here
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204)
});

function generateAccessToken(user){
   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15s'});
}




app.listen(4000);