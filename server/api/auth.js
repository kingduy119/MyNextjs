// const Cache = require("../caches");
const router = require("express").Router();
const AuthValidator = require("../validators/auth");
const AuthAPI = require("../controllers/auth");

// Google
router.get('/google',
    AuthValidator.checkToken,
    AuthAPI.verifyGoogle,
);
router.get('/oauth2callback', 
    AuthAPI.verifyGoogleCallback, 
    AuthAPI.redirectIndexAndCreateToken,
);

// Local
router.post('/signup', 
    // AuthValidator.onSignUp,
    AuthAPI.checkUserExists,
    AuthAPI.verifySignup, 
    AuthAPI.redirectIndexAndCreateToken,
);
router.get('/signin', 
    AuthValidator.onSignIn,
    AuthAPI.verifySignin,
    AuthAPI.redirectIndexAndCreateToken,
);
router.get('/signout', 
    // AuthValidator.checkToken,
    AuthAPI.redirectLoginAndClearToken,
);

module.exports = router;