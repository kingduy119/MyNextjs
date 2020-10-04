import sendRequest, { getOtps, postOtps } from "./sendRequest";

export function fetchSystem() {
    return sendRequest(`/endpoint`, getOtps);
}

export function updateSystem(data) {
    return sendRequest(`/endpoint`, getOtps);
}
