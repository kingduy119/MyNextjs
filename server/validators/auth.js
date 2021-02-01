const jwt = require('jsonwebtoken');
const { check } = require("express-validator");
const { runAuthValidator } = require("./index");

function verifyToken(token) {
    if (!token) return { error: "require token" };
    return jwt.verify( token.split(' ')[1], process.env.JWT_SECRET,
        (err, result) => {
            if (err) return { error: err };
            return { result };
        }
    );
}

const checkToken = (req, res, next) => {
    switch(req.originalUrl) {
        case '/login':
        case '/v1/signup':
        case '/v1/signin':
            if(req.cookies['access_token']) { res.redirect('/'); }
            break;
        case '/':
        case '/v1/signout':
            if(!req.cookies['access_token']) { res.redirect('/login'); }
            break;
        default: break;
    }
    next();
}

// Validate fields
const username = check('username')
    .isLength({ min: 6 }).withMessage("The Username must be 5+ chars long");

const password = check('password')
    .isLength({ min: 6 }).withMessage("The Password must be 5+ chars long");

const firstname = check('firstname')
    .isLength({ min: 6 }).withMessage("The Firstname must be 5+ chars long");

const lastname = check('lastname')
    .isLength({ min: 6 }).withMessage("The Lastname must be 5+ chars long");

module.exports = {
    // token, isToken, tokenRequired, 
    checkToken,
    username, password, firstname, lastname,
    checkFieldSignUp: [
        checkToken,
        username,
        password,
        firstname,
        lastname,
        runAuthValidator
    ],
    checkFieldSignIn: [
        checkToken,
        username,
        password,
        runAuthValidator
    ],
}
