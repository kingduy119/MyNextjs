import { API_URL } from "../config";
import axios from "axios";
import qs from "qs";

export default async function sendRequestTo(path, opts = {}) {
    if (opts.data) { Object.assign(opts, { data: qs.stringify(opts.data) }); }
    try {
        let config = Object.assign({}, opts, {
            url: path,
            baseURL: API_URL,
            headers: { "Content-Type": "application/json; charset=UTF-8", ...opts.headers },
        });
        let response = await axios(config);
        return response.data;
    } catch (error) { return null; }
}

export const getOtps = {
    method: "GET"
}

export const postOtps = {
    method: "POST",
    headers: { "Content-type": "application/x-www-form-urlencoded" },
};
