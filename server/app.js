
const next = require("next");
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const passport = require("passport");

const useSessionMiddleware = require("./middleware/session-middleware");
const connectToMongoDB = require("./database/mongo-config");
const apiREST = require("./api");

const { DEV, PORT_API, MONGO_URL } = require("./consts");
// const { createServer } = require("http");

const app = next({ DEV });
const handle = app.getRequestHandler();

// Server side rendering Nextjs
app
    .prepare()
    .then(async () => {
        const server = express();
        server.use(morgan("dev"));
        if (!DEV) { server.set('trust proxy', 1); }

        useSessionMiddleware(server, session, mongoose);
        connectToMongoDB(MONGO_URL, mongoose);

        server.use(helmet());
        server.use(compression());
        server.use(cookieParser());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));
        server.use(passport.initialize());
        server.use(passport.session());
        server.use(require('serve-static')(__dirname + '/../../public'));

        // Give all Nextjs's request to Nextjs server
        server.get('/_next/*', (req, res) => {
            handle(req, res);
        });
        server.get('/static/*', (req, res) => {
            handle(req, res);
        });

        // Customer handle request
        apiREST(server, app);

        server.get('*', (req, res) => { // Redirect error
            handle(req, res);
        });

        // const http = createServer(server);
        server.listen(PORT_API, (err) => {
            if (err) throw err;
            console.log(`> Ready ${PORT_API} on https://localhost:${PORT_API}`);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });

