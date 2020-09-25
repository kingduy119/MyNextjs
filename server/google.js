const passport = require("passport");
const Strategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("./models/User");

function auth({ ROOT_URL, server }) {

    console.log('GOOGLE AUTH START');
    const verify = async (accessToken, refreshToken, profile, done) => {
        let email;
        let avatarUrl;

        console.log(`accessToken: ${accessToken}`);
        console.log(`refreshToken ${refreshToken}`);
        if (profile.emails) {
            email = profile.emails[0].value;
        }

        if (profile.photos && profile.photos.length > 0) {
            avatarUrl = profile.photos[0].value;
        }

        console.log(`profile: ${JSON.stringify(profile)}`);

        try {
            const user = await User.signInOrSignUp({
                googleId: profile.id,
                email,
                googleToken: { accessToken, refreshToken },
                displayName: profile.displayName,
                avatarUrl,
            });
            done(null, user);
        } catch (err) {
            done(err);
            console.log(err);
        }
    }

    passport.use(
        new Strategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRECT,
                callbackURL: `/oauth2callback`,
            },
            verify,
        ),
    );

    /**
     * Sessions
     */
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    server.use(passport.initialize());
    server.use(passport.session());

    /**
     * Route
     */
    server.get(
        '/google',
        passport.authenticate('google', {
            scope: ['profile']
        })
    );

    server.get(
        '/oauth2callback',
        passport.authenticate('google', {
            failureRedirect: '/login',
        }),
        (req, res) => {
            console.log(req.user);
            res.send(req.user);
        }
    );
}

module.exports = auth;