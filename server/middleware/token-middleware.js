const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {
        let token = req.headers.authorization.split(' ')[1];
        let decode = jwt.verify(token, 'secret_token');
        req.user = decode;
        next();
    } catch (err) { res.status(404).json({ error: err }); }
}

module.exports = {
    verifyToken,
}