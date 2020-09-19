const router = require("express").Router();
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const ProfileMgr = require("../controllers/ProfileManager");

const User = require("../models/User");

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
});

// Login:
passport.use('login', new LocalStrategy({
    passReqToCallback: true,
}, async (req, username, password, done) => {

    let info = Object.assign({}, req.query, { username, password });

    let { error, state, data } = await ProfileMgr.onHandleRequest("login", info);

    if (error) { return done(null, false); }

    return done(null, data, { message: state });
}));

router.get('/login', passport.authenticate('login', { failureRedirect: 'http://localhost:3000/login' }),
    (req, res) => {
        console.log(req.query.redirectUrl);
        res.redirect("http://localhost:3000/");
    }
)

// Register:
passport.use('register', new LocalStrategy({
    passReqToCallback: true,
}, async (req, username, password, done) => {

    let info = Object.assign({}, req.body, { userId: username, password });
    let { error, state, data } = await ProfileMgr.onHandleRequest("create", info);
    if (error) return done(null, false);

    return done(null, data, { message: state });
}));

router.post('/register', passport.authenticate('register', { failureRedirect: 'http://localhost:3000/login' }),
    (req, res) => {
        console.log(req.query.redirectUrl);
        res.redirect("http://localhost:3000/");
    }
);

// Verify callback:
const verify = async (accessToken, refreshToken, profile, done) => {
    let email, avatarUrl;
    if (profile.emails) { email = profile.emails[0].value; }
    if (profile.photos && profile.photos.length > 0) { avatarUrl = profile.photos[0].value; }

    try {
        let info = Object.assign({}, {
            provider: profile.provider,
            userId: profile.id,
            email,
            token: { accessToken, refreshToken },
            displayName: profile.displayName,
            avatarUrl,
        });
        const user = await ProfileMgr.onLoginOrRegister(info);
        done(null, user);
    } catch (err) { done(err); }
}

// Google:
passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRECT,
        callbackURL: `/v1/oauth2callback`,
    },
    verify,
));

router.get('/google', passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));

router.get('/oauth2callback', passport.authenticate('google',
    {
        failureRedirect: '/login',
        successRedirect: "/"
    }),
);


module.exports = router;



