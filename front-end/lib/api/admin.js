import sendRequest from "./sendRequest";
const admin = "/v1/admin"

export const listUser = () => {
    return sendRequest(`${admin}/list`, {
        method: "GET"
    });
}

export const createUser = (data) => {
    return sendRequest(`${admin}/create`, {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data,
    });
}

export const findUser = (params) => {
    return sendRequest(`${admin}/user/${params.username}`, {
        method: "GET"
    });
}

export const changePassword = (data) => {
    return sendRequest(`${admin}/update`, {
        method: "PUT",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data,
    });
}

export const deleteUser = (data) => {
    return sendRequest(`${admin}/delete`, {
        method: "DELETE",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        data,
    })
}

