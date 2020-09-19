const mongoConnectSession = require("connect-mongo");
const { SESSION_SECRET } = require("../consts");

function sessionConfig(server, session, mongoose) {
    const MongoStore = mongoConnectSession(session);
    // let expiryDate = new Date(Date.now() + 60 + 60 * 1000); // 1 hour
    server.use(session({
        name: "dh119-session",
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        // cookie: {
        //     secure: true,
        //     httpOnly: true,
        //     domain: "example.com",
        //     path: 'foo/bar',
        //     expires: expiryDate,
        // },
        store: new MongoStore({
            mongooseConnection: mongoose.connection,
            ttl: 14 * 24 * 60 * 60, // 14 days
        }),
    }));
}

module.exports = sessionConfig;