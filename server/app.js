const next = require('next');
const http = require('http');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;
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

    // Give all Nextjs's request to Nextjs server
    server.get('/_next/*', (req, res) => {
      handle(req, res);
    });
    server.get('/static/*', (req, res) => {
      handle(req, res);
    });

    // Handle Errors
    server.get('*', (req, res) => {
      handle(req, res);
    });
    // Server's listening port
    const httpServer = http.Server(server);
    httpServer.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Server is listening on https://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
