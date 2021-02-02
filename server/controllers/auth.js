const passport = require("passport")
const jwt = require('jsonwebtoken');
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/User");
const { hash, compare } = require("../utils/verify");
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRECT } = require("../consts");

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    User.findById(id)
    .select('userId provider displayName avatarUrl')
    .exec((err, user) => { done(err, user); });
});

/** Google */
const strategyGoogle = new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRECT,
        callbackURL: `/v1/oauth2callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await User
                .findOne({ userId: profile.id })
                .select('displayName avatarUrl access_token refresh_token');
            if (!user) {
                let email, avatarUrl;
                if (profile.emails) { email = profile.emails[0].value; }
                if (profile.photos && profile.photos.length > 0) { 
                    avatarUrl = profile.photos[0].value;
                }
    
                user = await User.create({
                    provider: profile.provider,
                    userId: profile.id,
                    displayName: profile.displayName,
                    access_token: accessToken,
                    refresh_token: refreshToken,
                    email,
                    avatarUrl,
                });
            }
            else if (user.access_token != accessToken
                || user.refresh_token != refreshToken 
                ) {
                user.updateToken(accessToken, refreshToken);
            }
            return done(null, user);
        } catch (err) { return done(err, null); }
    }
);
passport.use(strategyGoogle);

exports.verifyGoogle = passport.authenticate('google', {
    scope: 'https://www.googleapis.com/auth/plus.login'
});
exports.verifyGoogleCallback = passport.authenticate('google', { 
    failureRedirect: '/login',
});
/** End Google */

/** Local */
passport.use('signin',
    new LocalStrategy(
        { 
            passReqToCallback: true
        },
        async (req, username, password, done) => {
            let docs = { id: req.query.id, userId: username};
            try {
                let user = await User.findOne(docs);
                if(!user) { return done('Username is not existed!', null); }

                if (!compare(password, user.password)) { return done('Wrong Password!', null); }
                return done(null, user);
            } catch (err) { return done(err, null); }
        }
    ),
);
exports.verifySignin = passport.authenticate('signin', { failureRedirect: '/login' });

passport.use('signup',
    new LocalStrategy(
        { passReqToCallback: true },
        async (req, username, password, done) => {
            try {
                let docs = Object.assign({}, req.query, {
                    userId: username,
                    password: hash(password),
                });
                let user = await User.create(docs);
                return done(null, user);
                
            } catch (err) { return done(null, false, { error: err }); }
        }
    )
);
exports.verifySignup = passport.authenticate('signup', { failureRedirect: '/login' });

/**
 * Methods
 */
exports.checkUserExists = (req, res, next) => {
    User.findOne({userId: req.query.username}, (err, user) => {
        if(err) return res.status(500).send(err);
        if(user) return res.status(200).send('Username is existed!');
        next();
    });
}

exports.redirectIndexAndCreateToken = (req, res) => {
    let access_token = jwt.sign({ _id: req.user._id }, process.env.JWT_SECRET, {
        expiresIn: 6 * 60 * 60,
    });
    res.cookie('access_token', `Bearer ${access_token}`, { expiresIn: 6 * 60 * 60 })
    .redirect(`/`);
}

exports.redirectLoginAndClearToken = (req, res) => {
    req.logout();
    res.clearCookie('access_token').redirect('/login');
}




