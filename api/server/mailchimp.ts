import * as request from 'request';

import {
    MAILCHIMP_API_KEY,
    MAILCHIMP_REGION,
    MAILCHIMP_SAAS_ALL_LIST_ID
} from "./consts";
import { rejects } from 'assert';

const LIST_ID = {
    signup: MAILCHIMP_SAAS_ALL_LIST_ID,
};

function callAPI({ path, method, data }) {
    const ROOT_URI = `https://${MAILCHIMP_REGION}.api.mailchimp.com/3.0`;

    const API_KEY = MAILCHIMP_API_KEY;

    return new Promise((resolve, reject) => {
        request.post(
            {
                method,
                uri: `${ROOT_URI}${path}`,
                headers: {
                    Accept: 'application/json',
                    Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`,
                },
                json: true,
                body: data,
            },
            (err, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            }
        );
    })
}

async function subscribe({ email, listName }) {
    const data = {
        email_address: email,
        status: 'subscribe',
    };

    const path = `/list/${LIST_ID[listName]}/members`;

    await callAPI({ path, method: 'POST', data });
}

export { subscribe };