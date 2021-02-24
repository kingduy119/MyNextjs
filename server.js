const next = require('next');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : 'https://kdisolutions.link';

const app = next({ dev });
const handle = app.getRequestHandler();
/** Nextjs Server side */
app
  .prepare()
  .then(async () => {
    const server = express();
    if (!dev) {
      server.set('trust proxy', 1);
    }

    // Connect DB
    const urlDB =
      process.env.MONGO_URL ||
      'mongodb+srv://hoangduy:hoangduy123@cluster0-4ebzu.mongodb.net/PROD?retryWrites=true&w=majority';
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    mongoose.connect(urlDB, options, () => {
      console.log(`Connected Mongo Database! URL: ${process.env.MONGO_URL ? 'true' : 'false'}`);
    });

    // Give all Nextjs's request to Nextjs server
    server.get('/_next/*', (req, res) => {
      handle(req, res);
    });
    server.get('/static/*', (req, res) => {
      handle(req, res);
    });

    server.get('/hi', (req, res) => {
      return res.send('Hi');
    });

    // Handle Errors
    server.get('*', (req, res) => {
      handle(req, res);
    });
    // Server's listening port
    const httpServer = http.Server(server);
    httpServer.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Server is listening on ${ROOT_URL}`);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
