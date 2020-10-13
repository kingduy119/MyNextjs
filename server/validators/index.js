const { validationResult } = require("express-validator");
const { /**token, */ username, password } = require("./auth");
const { content } = require("./post");

const runValidator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array()[0].msg });
    }
    next();
}

const runAuthValidator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).redirect(`/login?error=${errors.array()[0].msg}`);
    }
    next();
}


module.exports = {
    // auth
    validateSignup: [username, password, runAuthValidator],
    validateSignin: [username, password, runAuthValidator],
    // post
    createPostValidator: [content, runValidator],
}