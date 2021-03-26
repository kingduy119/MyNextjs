const passport = require("passport")
const jwt = require('jsonwebtoken');

const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRECT } = require("../consts");
const { hash, compare } = require("../utils/verify");
const UserModel = require("../models/User");

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    User.findById(id)
    .select('userId provider displayName avatarUrl')
    .exec((err, user) => { done(err, user) });
});

/** #Strategies */
const strategies = {
    GOOGLE: new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRECT,
            callbackURL: `/v1/oauth2callback`,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await UserModel
                    .findOne({ userId: profile.id })
                    .select('displayName avatarUrl access_token refresh_token');
                if (!user) {
                    let email, avatarUrl;
                    if (profile.emails) { email = profile.emails[0].value; }
                    if (profile.photos && profile.photos.length > 0) { 
                        avatarUrl = profile.photos[0].value;
                    }
        
                    user = await UserModel.create({
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
    ),
    LOCAL_SIGNUP: new LocalStrategy(
        { 
            passReqToCallback: true 
        },
        async (req, username, password, done) => {
            try {
                let docs = Object.assign({}, req.query, {
                    userId: username,
                    password: hash(password),
                });
                let user = await UserModel.create(docs);
                return done(null, user);
                
            } catch (err) { return done(null, false, { error: err }); }
        }
    ),
    LOCAL_SIGNIN: new LocalStrategy(
        {
            passReqToCallback: true
        },
        async (req, username, password, done) => {
            let docs = { id: req.query.id, userId: username};
            try {
                let user = await UserModel.findOne(docs);
                if(!user) { return done('Username is not existed!', null); }

                if (!compare(password, user.password)) { return done('Wrong Password!', null); }
                return done(null, user);
            } catch (err) { return done(err, null); }
        }
    ),
};
passport.use(strategies.GOOGLE);
passport.use('signin', strategies.LOCAL_SIGNIN);
passport.use('signup', strategies.LOCAL_SIGNUP);

/**
 * #Verify
 */
exports.verifyGoogle = passport.authenticate('google', {
    scope: 'https://www.googleapis.com/auth/plus.login'
});
exports.verifyGoogleCallback = passport.authenticate('google', {
    failureRedirect: '/login',
});
exports.verifyLocalSignin = passport.authenticate('signin', { 
    failureRedirect: '/login',
});
exports.verifyLocalSignup = passport.authenticate('signup', { 
    failureRedirect: '/login',
});

/**
 * #Methods
 */
function isToken(token) {
    return jwt.verify(
        token.split(' ')[1],
        process.env.JWT_SECRET,
        (err, result) => {
            if (err) return { error: err };
            return { result };
        }
    );
}

exports.requiredToken = (req, res, next) => {
    let token = req.cookies['access_token'];
    if(!token || !isToken(token)) {
        return res.redirect('/v1/signout');
    }
    next();
}

exports.checkToken = (req, res, next) => {
    let token = req.cookies['access_token'];
    if(token && isToken(token)) {
        return res.redirect('/');
    }
    next();
}

exports.checkUserExists = (req, res, next) => {
    User.findOne({userId: req.query.username}, (err, user) => {
        if(err) return res.status(500).send(err);
        if(user) return res.status(200).send('Username is existed!');
        next();
    });
}

exports.redirectIndexAndCreateToken = (req, res) => {
    let access_token = jwt.sign(
        { _id: req.user._id }, 
        process.env.JWT_SECRET,
        { expiresIn: 6 * 60 * 60 }
    );
    return res
        .cookie(
            'access_token',
            `Bearer ${access_token}`,
            { expiresIn: 6 * 60 * 60 },
        )
        .redirect(`/`);
}

exports.onSignout = (req, res) => {
    req.logout();
    res.clearCookie('access_token').redirect('/login');
}



