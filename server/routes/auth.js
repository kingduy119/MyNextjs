// const Cache = require("../caches");
const router = require("express").Router();
const AuthValidator = require("../validators/auth");
const AuthCtrl = require("../controllers/auth");

// Google
router.get('/google', // App verify to Google
    // AuthValidator.checkToken, // Redirect if there is token
    AuthCtrl.verifyGoogle, // Start send
);

router.get('/oauth2callback', // Google callback then verify
    AuthCtrl.verifyGoogleCallback, // Passport verify
    AuthCtrl.redirectIndexAndCreateToken, // Start redirect
);

// Local
router.post('/signup',
    // AuthValidator.onSignUp,
    // AuthCtrl.checkUserExists,
    AuthCtrl.verifySignup, 
    AuthCtrl.redirectIndexAndCreateToken,
);
router.get('/signin', 
    // AuthValidator.onSignIn,
    AuthCtrl.verifySignin,
    AuthCtrl.redirectIndexAndCreateToken,
);
router.get('/signout', 
    // AuthValidator.checkToken,
    AuthCtrl.onSignout,
);

module.exports = router;