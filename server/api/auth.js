const Cache = require("../caches");
const router = require("express").Router();
const {
    middlewareSignup,
    middlewareSignin,
    middlewareSignout,
    middlewareGoogle
} = require("../validators/auth");
const {
    passportSignup, passportSignin,
    signin, signout,
    passportGoogle, passportGoogleCallback,
} = require("../controllers/auth");

router.post('/signup', middlewareSignup, passportSignup, signin);
router.get('/signin', middlewareSignin, passportSignin, signin);
router.get('/signout', middlewareSignout, signout);
router.get('/google',
    // middlewareGoogle,
    passportGoogle,
);
router.get('/oauth2callback', passportGoogleCallback, signin);

module.exports = router;