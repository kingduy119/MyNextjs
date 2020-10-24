const { check } = require("express-validator");
const { runValidator } = require("./index");

const content = check('content')
    .not().isEmpty().withMessage('content is required')
    .isLength({ min: 5 }).withMessage("Too short");

module.exports = {
    content,
    validateCreatePost: [content, runValidator]
}

