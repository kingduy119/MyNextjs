const { check, query } = require("express-validator");
const { runAuthValidator } = require("./index");
const jwt = require('jsonwebtoken');

function checkToken(token) {
    return jwt.verify(
        token.split(' ')[1],
        process.env.JWT_SECRET,
        (err, result) => {
            if (err) return { error: err };
            return { result };
        }
    );
}

const verifyToken = (req, res, next) => {
    let token = req.cookies['access_token'];
    if(!token || !checkToken(token)) {
        return res.redirect('/v1/signout');
    }
    
    switch(req.originalUrl) {
        case '/login':
        case '/v1/signup':
        case '/v1/signin':
        case '/google':
            if(token && verifyToken(token)) {
                return res.redirect('/');
            }
            break;
        default: break;
    }
    next();
}


const username = check('username')
    .notEmpty().isString().isLength({min: 6})
    .custom((value) => {
        if(value.match(/\W/g)) {
            throw new Error("Invalid value");
        }
        return true;
    })

const password = check('password')
    .notEmpty().isString().isLength({ min: 6 });
    
const firstname = check('firstname')
    .isLength({ min: 6 }).withMessage("The Firstname must be 5+ chars long");

const lastname = check('lastname')
    .isLength({ min: 6 }).withMessage("The Lastname must be 5+ chars long");

module.exports = {
    verifyToken,
    username, password, firstname, lastname,
    onSignUp: [
        verifyToken,
        username,
        password,
        firstname,
        lastname,
        runAuthValidator
    ],
    onSignIn: [
        verifyToken,
        username,
        password,
        runAuthValidator
    ],
}
