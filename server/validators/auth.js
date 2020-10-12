const { check } = require("express-validator");

// exports.token = check("access_token")
//     .not().isEmpty().withMessage({ access_token: 'Access denied' });

exports.username = check('username')
    .not().isEmpty().withMessage({ username: "Required" })
    .isLength({ min: 6 }).withMessage({ username: "Too short!" });

exports.password = check('password')
    .not().isEmpty().withMessage({ password: "Required" });




