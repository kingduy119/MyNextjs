const passport = require("passport")
const jwt = require('jsonwebtoken');
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/User");
const { hash, compare } = require("../utils/verify");
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRECT } = require("../consts");

/**
 * #1 Verify function:
 */
async function verifyGoogle(accessToken, refreshToken, profile, done) {
    let email, avatarUrl;
    if (profile.emails) { email = profile.emails[0].value; }
    if (profile.photos && profile.photos.length > 0) { avatarUrl = profile.photos[0].value; }
    try {
        let user = await User.findOne({ userId: profile.id });
        if (!user) {
            user = await User.create({
                provider: profile.provider,
                userId: profile.id,
                token: { accessToken, refreshToken },
                displayName: profile.displayName,
                email,
                avatarUrl,
            });
        } else {
            if (user.token.access_token != accessToken) user.token.access_token = accessToken;
            if (user.token.refresh_token != refreshToken) user.token.refresh_token = refreshToken;
            await user.save();
        }
        return done(null, user);
    } catch (err) { return done(null, false); }
}

const verifySignup = async (req, username, password, done) => {
    try {
        let pwd_hashed = await hash(password);
        let user = await User.create({
            userId: username,
            password: pwd_hashed,
            displayName: req.body.displayName,
            avatarUrl: req.body.avatarUrl,
            email: req.body.email,
        });
        return done(null, user);
    } catch (err) {
        return done(null, false, { error: err });
    }
}

const verifySignin = async (req, username, password, done) => {
    try {
        let user = await User.findOne({ userId: username });
        if (!(await compare(password, user.password))) throw "Wrong password";

        return done(null, user);
    } catch (err) { return done(null, false, { error: err }); }
}

/**
 *  #2 Strategy: (option, cb Verify)
 */
const strategyLocalSignin = new LocalStrategy(
    { passReqToCallback: true },
    verifySignin
);
const strategyLocalSignup = new LocalStrategy(
    { passReqToCallback: true },
    verifySignup
);
const strategyGoogle = new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRECT,
        callbackURL: `/v1/oauth2callback`,
    },
    verifyGoogle
);

/**
 *  #3 Middleware: (path, Strategy)
 */
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    User.findById(id)
        .select('userId provider displayName avatarUrl')
        .exec((err, user) => { done(err, user); });
});

passport.use('signin', strategyLocalSignin);
passport.use('signup', strategyLocalSignup);
passport.use(strategyGoogle);

/**
 * Passport authentice: (path, cb Middleware)
 */
exports.passportSignup = passport.authenticate('signup', { failureRedirect: '/login' });
exports.passportSignin = passport.authenticate('signin', { failureRedirect: '/login' });
exports.passportGoogle = passport.authenticate('google', {
    scope: 'https://www.googleapis.com/auth/plus.login'
});
exports.passportGoogleCallback = passport.authenticate('google', { failureRedirect: '/login' });

/**
 * Service
 */
exports.signup = (req, res) => {
    res.redirect(`/?${req.user.userId}`);
}
exports.signin = (req, res) => {
    let exprireTime = 6 * 60 * 60; // 6hour 
    let access_token = jwt.sign({ _id: req.user._id }, process.env.JWT_SECRET, {
        expiresIn: exprireTime,
    });
    res.cookie('access_token', `Bearer ${access_token}`, { expiresIn: exprireTime })
        .redirect(`/`);
}
exports.signout = (req, res) => {
    req.logout();
    res.clearCookie('access_token').redirect('/login');
}




