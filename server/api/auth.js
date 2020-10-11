const router = require("express").Router();
const {
    verifyToken,
    passportSignup, signup,
    passportSignin, signin,
    signout,
    google, googlecallback,
} = require("../controllers/auth");

router.post('/signup', passportSignup, signup);
router.get('/signin', passportSignin, signin);
router.get('/signout', verifyToken, signout);
router.get('/google', google);
router.get('/oauth2callback', googlecallback, signin);

module.exports = router;