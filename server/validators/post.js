const { check } = require("express-validator");

exports.createPostValidator = [
    check('content')
        .not()
        .isEmpty()
        .withMessage("content is required"),
]



