const router = require("express").Router();
const { validateSignup, validateSignin } = require("../validators");
const {
    passportSignup, /**signup, */
    passportSignin, signin,
    signout,
    passportGoogle, passpassGoogleCallback,
} = require("../controllers/auth");

router.post('/signup', validateSignup, passportSignup, signin);
router.get('/signin', validateSignin, passportSignin, signin);
router.get('/signout', signout);
router.get('/google', passportGoogle);
router.get('/oauth2callback', passpassGoogleCallback, signin);

module.exports = router;