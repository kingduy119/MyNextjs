// const Cache = require("../caches");
const router = require("express").Router();
const AuthValidator = require("../validators/auth");

const AuthAPI = require("../controllers/auth");

// Local
router.post('/signup', 
    // AuthValidator.checkFieldSignUp,
    AuthAPI.checkUserExists,
    AuthAPI.verifySignup, 
    AuthAPI.redirectIndexAndCreateToken,
);
router.get('/signin', 
    // AuthValidator.checkFieldSignIn,
    AuthAPI.verifySignin,
    AuthAPI.redirectIndexAndCreateToken,
);
router.get('/signout', 
    AuthValidator.checkToken,
    AuthAPI.redirectLoginAndClearToken,
);

// Google
router.get('/google',
    AuthValidator.checkToken,
    AuthAPI.verifyGoogle,
);
router.get('/oauth2callback', 
    AuthAPI.verifyGoogleCallback, 
    AuthAPI.redirectIndexAndCreateToken,
);

module.exports = router;