const router = require("express").Router();
const {
    verifyToken,
    passportSignup, signup,
    passportSignin, signin,
    signout,
    passportGoogle, passpassGoogleCallback,
} = require("../controllers/auth");

router.post('/signup', passportSignup, signin);
router.get('/signin', passportSignin, signin);
router.get('/signout', signout);
router.get('/google', passportGoogle);
router.get('/oauth2callback', passpassGoogleCallback, signin);

module.exports = router;