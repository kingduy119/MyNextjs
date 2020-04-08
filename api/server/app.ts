
import * as http from 'http';
import * as cors from 'cors';
import * as helment from 'helmet';
import * as compression from 'compression';
import * as express from 'express';
import * as mongoose from 'mongoose';

import {
    PORT,
    MONGO_URL,
    URL_APP
} from './consts';

// Mongoose:
// const options = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
// }
// mongoose.connect(MONGO_URL, options);

// Express Server:
const server = express();
server.use(cors({ origin: URL_APP, credentials: true }));
server.use(helment());
server.use(compression());

server.use(express.json());

// Mongo Store:


// API:
server.get('/', (_, res) => {
    res.send('Index page');
})

// // Http:
const httpServer = new http.Server(server);


server.get('*', (_, res) => {
    res.sendStatus(403);
});

httpServer.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`)
});















