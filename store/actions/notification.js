
const ALERT_SUCCESS = "ALERT_SUCCESS";
const ALERT_ERROR = "ALERT_ERROR";
const ALERT_WARNING = "ALERT_WARNING";

const PUSH_NOTIFICATION = "PUSH_NOTIFICATION";
const POP_NOTIFICATION = "POP_NOTIFICATION";

const pushNotification = (notify) => ({
    type: PUSH_NOTIFICATION, notify
})
const popNotification = (index) => ({
    type: POP_NOTIFICATION, index
})

export {
    PUSH_NOTIFICATION, POP_NOTIFICATION,
    ALERT_SUCCESS, ALERT_WARNING, ALERT_ERROR,
    pushNotification, popNotification,
}
