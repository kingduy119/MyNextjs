const { check } = require("express-validator");
const { runValidator } = require("./index");
const { token } = require("./auth");

const content = check('content', 'content is required')
    .not().isEmpty().isLength({ min: 1 })

module.exports = {
    content,
    mdwPostCreate: [
        token,
        content,
        runValidator
    ],
    
}

