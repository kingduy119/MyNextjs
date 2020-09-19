
function httpStatus(type) {
    switch (type) {
        // 1xx: Infomation
        case "continue":
            return { status: 100, message: "Continue" }; //The server has received the request headers, and the client should proceed to send the request body
        case "sw-protocols":
            return { status: 101, message: "Switching Protocols" }; //The requester has asked the server to switch protocols
        case "check-point":
            return { status: 103, message: "Checkpoint" }; //Used in the resumable requests proposal to resume aborted PUT or POST requests

        // 2xx: Successfully
        case "ok":
            return { status: 200, message: "OK" }; //The request is OK (this is the standard response for successful HTTP requests)
        case "created":
            return { status: 201, message: "Created" };//The request has been fulfilled, and a new resource is created
        case "accepted":
            return { status: 202, message: "Accepted" };//The request has been accepted for processing, but the processing has not been completed
        case "non-auth-info":
            return { status: 203, message: "Non-Authoritative Information" };//The request has been successfully processed, but is returning information that may be from another source
        case "no-content":
            return { status: 204, message: "No Content" };//The request has been successfully processed, but is not returning any content
        case "reset-content":
            return { status: 205, message: "Reset Content" };//The request has been successfully processed, but is not returning any content, and requires that the requester reset the document view
        case "partical-content":
            return { status: 206, message: "Partial Content" };//The server is delivering only part of the resource due to a range header sent by the client

        // 3xx: Redirection
        case "multiple-choices":
            return { status: 300, message: "Multiple Choices" };//A link list. The user can select a link and go to that location. Maximum five addresses
        case "moved-permanently":
            return { status: 301, message: "Moved Permanently" };//The requested page has moved to a new URL
        case "found":
            return { status: 302, message: "Found" };//The requested page has moved temporarily to a new URL
        case "see-other":
            return { status: 303, message: "See Other" };//The requested page can be found under a different URL
        case "not-modified":
            return { status: 304, message: "Not Modified" };//Indicates the requested page has not been modified since last requested
        case "switch-proxy":
            return { status: 305, message: "Switch Proxy" };//No longer used
        case "temporary":
            return { status: 306, message: "Temporary Redirect" };//The requested page has moved temporarily to a new URL
        case "resume":
            return { status: 307, message: "Resume Incomplete" };//Used in the resumable requests proposal to resume aborted PUT or POST requests
    }
}

module.exports = httpStatus;