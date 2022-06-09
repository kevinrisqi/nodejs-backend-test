const jwt = require('jsonwebtoken');
const users = require('../repository/userRepo')

function login(req, res) {
    // Authentication user

    const username = req.body.username;
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
}

function authenticationToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.send(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.send(403)
        req.user = user
        res.json(req.user.name)
        // const users = [
        //     {
        //       "user_id": 1,
        //       "test": "",
        //       "username": "kevin",
        //       "isok": "true"
        //     },         
        //     {
        //       "user_id": 2,
        //       "test": "",
        //       "username": "risqi",
        //       "isok": " true"
        //     },
          
        // ];
        const username = users.filter(user => user.username === "kevin")
        console.log(username)
        next()
    })
}

module.exports = {
    login,
    authenticationToken,
}