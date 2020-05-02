const { createServer } = require("http");
const express = require("express")
const next = require("next");
const compression = require("compression");
const helmet = require("helmet");
const mongoose = require("mongoose");

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
 * Server side rendering Nextjs
 */
app
    .prepare()
    .then(async () => {
        const server = express();

        server.use(helmet());
        server.use(compression());
        server.use(express.json());


        auth({ ROOT_URL, server });   // Authentication with google account

        // Give all Nextjs's request to Nextjs server
        server.get('/_next/*', (req, res) => {
            handle(req, res);
        });

        server.get('/static/*', (req, res) => {
            handle(req, res);
        });



        // ...Mongo store session .....
        // ...

        // What is this? ->
        if (!dev) {
            server.set('trust proxy', 1);
            // sessionStorage.cookie.secure = true; 
        }


        server.get('*', (req, res) => {
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