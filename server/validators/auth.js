const { check } = require("express-validator");
const { runAuthValidator } = require("./index");

/**
 * Fields
 */
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

/**
 * #methods
 */
module.exports = {
    // username, password, firstname, lastname,
    onSignUp: [
        username,
        password,
        firstname,
        lastname,
        runAuthValidator
    ],
    onSignIn: [
        username,
        password,
        runAuthValidator
    ],
}
