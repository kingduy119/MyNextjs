const { createServer } = require("http");
const express = require("express")
const session = require("express-session");
const next = require("next");
const compression = require("compression");
const helmet = require("helmet");
const mongoose = require("mongoose");
const mongoConnectSession = require("connect-mongo");

const auth = require("./google");

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000;
const ROOT_URL = dev ? `https://localhost:${port}` : '';
const app = next({ dev })
const handle = app.getRequestHandler()

/**
 * Connect to Mongo database
 */
const MONGO_URL = dev ? process.env.MONGO_URL_TEST : process.env.MONGO_URL;
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}
mongoose
    .connect(MONGO_URL, options, () => {
        console.log("Conected to Mongo server");
    })
    .catch(err => { console.log(err) });

/**
 * Sesssion
 */
const sessionSecret = process.env.SESSION_SECRET;

/**
 * Server side rendering Nextjs
 */
app
    .prepare()
    .then(async () => {
        const server = express();

        server.use(helmet());
        server.use(compression());
        server.use(express.json());


        // Give all Nextjs's request to Nextjs server
        server.get('/_next/*', (req, res) => {
            handle(req, res);
        });

        server.get('/static/*', (req, res) => {
            handle(req, res);
        });

        // Mongo store session
        const MongoStore = mongoConnectSession(session);
        const sess = {
            name: 'marketkingduy.dad',
            secret: sessionSecret,
            store: new MongoStore({
                mongooseConnection: mongoose.connection,
                ttl: 14 * 24 * 60 * 60, // 14 days
            }),
            cookie: {
                httpOnly: true,
                maxAge: 14 * 24 * 60 * 60 * 1000, // expires in 14 days
            },
        };

        if (!dev) {
            server.set('trust proxy', 1);
            sess.cookie.secure = true;
        }
        server.use(session(sess));
        // --session--

        
        auth({ ROOT_URL, server });   // Authentication with google account

        server.get('*', (req, res) => { // Redirect error
            handle(req, res);
        });

        const http = createServer(server);
        http.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready ${port} on https://localhost:${port}`);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });