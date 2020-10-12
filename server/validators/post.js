const { check } = require("express-validator");

exports.content = check('content')
    .not().isEmpty().withMessage('content is required')
    .isLength({ min: 5 }).withMessage({ content: "Too short" });




