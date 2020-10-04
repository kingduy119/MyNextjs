import sendRequest from "./sendRequest";
const pathPost = "/v1/post";

export const createPost = (data) => {
    return sendRequest(`${pathPost}/create`, {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data,
    });
}

export const findPosts = () => {
    return sendRequest(`${pathPost}/posts`, {
        method: "GET",
    });
}

export const updatePost = (data) => {
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