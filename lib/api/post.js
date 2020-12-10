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

export const sendPostLike = (postId, data) => {
    return sendRequest(`${pathPost}/${postId}/like`, {
        method: "PUT",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data
    });
}

export const sendFillPosts = () => {
    return sendRequest(`${pathPost}/posts`, {
        method: "GET",
    });
}

export const postUpdate = (data) => {
    return sendRequest(`${pathPost}/update`, {
        method: "PUT",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data
    });
}

export const deletePost = (data) => {
    return sendRequest(`${pathPost}/delete`, {
        method: "DELETE",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data
    });
}