import * as express from 'express';

import publicApi from './public';
import { loggers } from 'winston';

function handleError(err, _, res, __) {
    res.json({ error: err.message || err.toString() });
}

export default function api(server: express.Express) {
    server.use('/api/v1/public', publicApi, handleError);
}