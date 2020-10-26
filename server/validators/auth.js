const { check } = require("express-validator");
const { runAuthValidator } = require("./index");

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
    username, password, firstname, lastname,
    validateSignup: [
        username,
        password,
        passordComfirm,
        firstname,
        lastname,
        runAuthValidator
    ],
    validateSignin: [
        username,
        password,
        runAuthValidator
    ],
}
