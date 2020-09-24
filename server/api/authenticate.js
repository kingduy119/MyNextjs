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

    // console.log(`API::Login: ${JSON.stringify(req.header)}`);
    // console.log(`API::Login: ${JSON.stringify(req.body)}`);

    let info = Object.assign({}, req.query, { username, password });
    let { error, state, data } = await ProfileMgr.onHandleRequest("login", info);
    if (error) { return done(null, false); }

    return done(null, data, { message: state });
}));

router.get('/login', passport.authenticate('login', { failureRedirect: '/login' }),
    (req, res) => {
        console.log(req.user);
        res.redirect("/");
    }
)

// Register:
passport.use('signup', new LocalStrategy({
    passReqToCallback: true,
}, async (req, username, password, done) => {

    // console.log(`API::Signup: ${JSON.stringify(req.header)}`);
    // console.log(`API::Signup: ${JSON.stringify(req.body)}`);

    let info = Object.assign({}, req.body, { userId: username, password });
    let { error, state, data } = await ProfileMgr.onHandleRequest("create", info);
    if (error) return done(null, false);

    return done(null, data, { message: state });
}));

router.post('/signup', passport.authenticate('signup', { failureRedirect: '/login' }),
    (req, res) => {
        console.log(req.user);
        res.redirect("/");
    }
);

// Verify callback:
const verify = async (accessToken, refreshToken, profile, done) => {
    let email, avatarUrl;
    if (profile.emails) { email = profile.emails[0].value; }
    if (profile.photos && profile.photos.length > 0) { avatarUrl = profile.photos[0].value; }

    console.log(`GoogleProfile: ${JSON.stringify(profile)}`);

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

router.get('/google', passport.authenticate('google', {
    scope: 'https://www.googleapis.com/auth/plus.login'
}));
router.get('/oauth2callback', passport.authenticate('google',
    {
        failureRedirect: '/login',
        successRedirect: "/"
    }),
);

router.get('/logout', (req, res) => {
    console.log(`logout: ${JSON.stringify(req.user)}`);
    req.logout();
    res.redirect('/login');
});

module.exports = router;



