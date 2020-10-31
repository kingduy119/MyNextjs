const jwt = require('jsonwebtoken');
const { check } = require("express-validator");
const { runAuthValidator } = require("./index");

function verifyToken(req) {
    let token = req.cookies['access_token'];
    if (!token) return { error: "require token" };

    return jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, result) => {
        if (err) return { error: err };
        return { result };
    });
}

// Validate Token
const token = (req, res, next) => {
    let { error } = verifyToken(req);
    if (error) return res.status(404).json({ error: error });
    next();
}
const tokenRequire = (req, res, next) => {
    let { error, result } = verifyToken(req);
    console.log(`tokenRequire: ${JSON.stringify(result)}`);
    if (!result) return res.redirect('/login');
    next();
}
const tokenLogin = (req, res, next) => {
    let { result } = verifyToken(req);
    console.log(`tokenLogin: ${JSON.stringify(result)}`);
    if (result)
        return res.redirect('/');
    next();
}

const clearToken = (req, res, next) => {
    if (req.cookies['access_token'])
        res.clearCookie('access_token');
    next();
}

// Validate fields
const username = check('username')
    .isLength({ min: 6 }).withMessage("The Username must be 5+ chars long");

const password = check('password')
    .isLength({ min: 6 }).withMessage("The Password must be 5+ chars long");

const passordComfirm = check('passwordComfirm',
    'passwordComfirm must have the same value as the password')
    .isLength({ min: 6 }).withMessage("The Password must be 5+ chars long")
    .custom((value, { req }) => value === req.query.password);

const firstname = check('firstname')
    .isLength({ min: 6 }).withMessage("The Firstname must be 5+ chars long");

const lastname = check('lastname')
    .isLength({ min: 6 }).withMessage("The Lastname must be 5+ chars long");

module.exports = {
    token, tokenRequire, tokenLogin,
    username, password, firstname, lastname,
    middlewareSignup: [
        clearToken,
        username,
        password,
        passordComfirm,
        firstname,
        lastname,
        runAuthValidator
    ],
    middlewareSignin: [
        clearToken,
        username,
        password,
        runAuthValidator
    ],
    middlewareSignout: [clearToken],
    middlewareGoogle: [tokenLogin],
}
