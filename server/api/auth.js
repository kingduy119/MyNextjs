const Cache = require("../caches");
const router = require("express").Router();
const {
    middlewareSignup,
    middlewareSignin,
    middlewareSignout,
    middlewareGoogle
} = require("../validators/auth");
// const {
//     passportSignup, passportSignin,
//     signin, signout,
//     passportGoogle, passportGoogleCallback,
// } = require("../controllers/auth");

const AuthAPI = require("../controllers/auth");

router.post('/signup', 
    middlewareSignup, 
    AuthAPI.passportSignup, 
    AuthAPI.signin,
);
router.get('/signin', 
    middlewareSignin, 
    AuthAPI.passportSignin, 
    AuthAPI.signin,
);
router.get('/signout', 
    middlewareSignout,
    AuthAPI.signout,
);
router.get('/google',
    // middlewareGoogle,
    AuthAPI.passportGoogle,
);
router.get('/oauth2callback', 
    AuthAPI.passportGoogleCallback, 
    AuthAPI.signin,
);

module.exports = router;