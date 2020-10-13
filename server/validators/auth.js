const { check } = require("express-validator");

// exports.token = check("access_token")
//     .not().isEmpty().withMessage({ access_token: 'Access denied' });

exports.username = check('username')
    .isLength({ min: 6 }).withMessage("The Username must be 5+ chars long");

exports.password = check('password')
    .isLength({ min: 6 }).withMessage("The Password must be 5+ chars long");




