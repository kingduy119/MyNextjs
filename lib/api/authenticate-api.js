import sendRequest, { getOtps, postOtps } from "./sendRequest";

export function create(data) {
    return sendRequest(`url`, Object.assign(postOtps, { data }));
}

export function login(data) {
    return sendRequest(`url`, Object.assign(getOtps, { data }));
}




