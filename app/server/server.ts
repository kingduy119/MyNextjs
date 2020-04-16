import './env';

import express from 'express';
import next from 'next';
import helmet from 'helmet';
// import * as mobxReact from 'mobx-react';
import * as path from 'path';

import { IS_DEV, PORT_APP, URL_API, URL_APP } from '../lib/consts';

const app = next({ dev: IS_DEV });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // give all Nextjs's request to Nextjs before anything else
    server.get('/_next/*', (req, res) => {
        // console.log('next server, page');
        handle(req, res);
    });

    server.use(express.json());

    // server.get('/api/v1/public/get-user', (_, res) => {
    //   res.json({ user: { email: 'team@builderbook.org' } });
    // });

    server.all('*', (req, res) => {
        handle(req, res);
    });

    console.log(PORT_APP);
    server.listen(PORT_APP, () => {
        console.log(`> Ready on ${URL_APP} ${URL_API} ${IS_DEV} ${PORT_APP}`);
    });
});
