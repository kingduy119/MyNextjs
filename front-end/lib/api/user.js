import sendRequest from "./sendRequest";
const url = '/v1/user/'

export function sendUserCreatePost(userId, data) {
    return sendRequest(`${url}${userId}/create-post`, {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data,
    });
}








