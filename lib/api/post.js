import sendRequest, { sendPostRequest, sendPutRequest } from "./sendRequest";
const pathPost = "/v1/post";

// [POST]post/crete({user, content})
export const sendCreatePost = (data) => {
    return sendRequest(`${pathPost}/create`, {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data,
    });
}

export const deletePost = (data) => {
    return sendRequest(`${pathPost}/delete`, {
        method: "DELETE",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data
    });
}

/** 
 * New API for Post Component
 */
//CREATE
export function onCreate(data) {
    return sendRequest(`${pathPost}/`, {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data,
    });
}

//READ
export function onReadMany() {
    return sendRequest(`${pathPost}/posts`, {
        method: "GET",
    });
}

// PostId
export function idCreate(postId, data) {
    return sendPostRequest(`${pathPost}/${postId}/`, data);
}
export function idUpdate(postId, data) {
    return sendPutRequest(`${pathPost}/${postId}/`, data);
}

//DELETE
export default {
    onCreate,
    onReadMany,
    idCreate, idUpdate,
};