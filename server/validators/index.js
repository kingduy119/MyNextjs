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

module.exports = {
    runValidator: runValidator,
    // auth
    validateSignup: [username, password, runValidator],
    validateSignin: [username, password, runValidator],
    // post
    createPostValidator: [content],
}