import sendRequest from "./sendRequest";
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
    return sendRequest(`${pathPost}/create`, {
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
//UPDATE
export function onUpdate(postId, data) {
    return sendRequest(`${pathPost}/${postId}/`, {
        method: "PUT",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data
    });
}
//DELETE
export default {
    onCreate,
    onReadMany,
    onUpdate,
};