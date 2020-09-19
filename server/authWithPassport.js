const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const ProfileMgr = require("./controllers/ProfileManager");
const User = require("./models/User");

function auth(server) {

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    });

    // Login:
    passport.use('login', new LocalStrategy({
        passReqToCallback: true,
    }, async (req, username, password, done) => {
        let { error, state, data } = await ProfileMgr.onHandleRequest("login", { username, password });
        if (error) { return done(null, false); }

        return done(null, data.user, { message: state });
    }));

    server.get('/v1/login', passport.authenticate('login', { failureRedirect: '/login' }),
        (req, res) => { res.status(200).json({ user: req.user }); }
    )

    // Register:
    passport.use('register', new LocalStrategy({
        passReqToCallback: true,
    }, async (req, username, password, done) => {
        let { error, state, data } = await ProfileMgr.onHandleRequest("create", req.query);
        if (error) return done(null, false, { error: error });

        return done(null, data.user, { message: state });
    }));
    server.post('/v1/register', passport.authenticate('register', { failureRedirect: '/login' }),
        (req, res) => { res.status(200).json({ user: req.user }); }
    );

    // Change password:
    server.put('/v1/change-password', async (req, res, next) => {
        let { error, state } = await ProfileMgr.onHandleRequest("change-password", req.body);
        if (error) return res.status(500).json({ error });

        return res.status(200).json({ state });
    });


    // Verify callback:
    const verify = async (accessToken, refreshToken, profile, done) => {
        let email, avatarUrl;
        if (profile.emails) { email = profile.emails[0].value; }
        if (profile.photos && profile.photos.length > 0) { avatarUrl = profile.photos[0].value; }

        try {
            const user = await User.signInOrSignUp({
                provider: profile.provider,
                userId: profile.id,
                email,
                token: { accessToken, refreshToken },
                displayName: profile.displayName,
                avatarUrl,
            });
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
    server.get('/v1/google', passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));
    server.get('/v1/oauth2callback', passport.authenticate('google',
        {
            // successRedirect: '/',
            failureRedirect: '/login'
        }),
        (req, res) => {
            res.redirect(`/?${req.user.userId}`);
        }
    );

    // Facebook:
    passport.use(new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRECT,
            callbackURL: `/facebookcallback`,
            profileFields: ['id', 'displayName', 'photos', 'email'],
        },
        verify
    ));
    server.get('/facebook', passport.authenticate('facebook'));
    server.get('/facebookcallback', passport.authenticate('facebook',
        {
            successRedirect: '/',
            failureRedirect: '/login'
        })
    );


    server.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
}

module.exports = auth;