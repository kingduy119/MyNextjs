
const next = require("next");
const http = require("http");
// const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const cors = require('cors');
// const session = require("express-session");
// const passport = require("passport");
// const path = require('path');

// const apiREST = require("./routes");
// const useSessionMiddleware = require("./middleware/session-middleware");
// const connectToMongoDB = require("./database/mongo-config");

const { DEV, PORT_API, MONGO_URL } = require("./consts");
const app = next({ DEV });
const handle = app.getRequestHandler();

/** Nextjs Server side */
app
    .prepare()
    .then(async () => {
        const server = express();

        if (!DEV) { server.set('trust proxy', 1); }

        // useSessionMiddleware(server, session, mongoose);
        // connectToMongoDB(MONGO_URL, mongoose);

        server.use(morgan("dev"));
        server.use(helmet());
        server.use(compression());
        server.use(cookieParser());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));
        // server.use(passport.initialize());
        // server.use(passport.session());
        server.use(express.static('public'));
        server.use(cors());

        // Give all Nextjs's request to Nextjs server
        server.get('/_next/*', (req, res) => {
            handle(req, res);
        });
        server.get('/static/*', (req, res) => {
            handle(req, res);
        });

        // Customer handle request
        // apiREST({ server, app });

        // server.get('/robots.txt', (req, res) => {
        //     res.sendFile(path.join(__dirname, '../static', 'robots,txt'));
        // })

        server.get('*', (req, res) => { // Redirect error
            handle(req, res);
        });

        const httpServer = http.Server(server);
        httpServer.listen(PORT_API, (err) => {
            if (err) throw err;
            console.log(`> Ready ${PORT_API} on https://localhost:${PORT_API}`);
        });
    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    });

