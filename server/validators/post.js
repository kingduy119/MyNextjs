const { check } = require("express-validator");
const { runValidator } = require("./index");

const content = check('content', 'content is required')
    .not().isEmpty().isLength({ min: 1 })

module.exports = {
    content,
    validateCreatePost: [content, runValidator]
}

