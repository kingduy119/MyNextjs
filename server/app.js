const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 8000;

app
    .prepare()
    .then(async () => {
        const server = express();

        // give all Nextjs's request to Nextjs server
        server.get('/_next/*', (req, res) => {
            handle(req, res);
        });

        server.get('/static/*', (req, res) => {
            handle(req, res);
        });

        server.get('*', (req, res) => {
            handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready ${port} on https://market-app-kingduy.herokuapp.com/`);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });

