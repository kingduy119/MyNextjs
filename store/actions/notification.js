
const ALERT_SUCCESS = "ALERT_SUCCESS";
const ALERT_ERROR = "ALERT_ERROR";
const ALERT_WARNING = "ALERT_WARNING";

const PUSH_NOTIFICATION = "PUSH_NOTIFICATION";
const POP_NOTIFICATION = "POP_NOTIFICATION";

const pushNotification = (notif) => ({
    type: PUSH_NOTIFICATION, notif
})
const popNotification = (notif) => ({
    type: POP_NOTIFICATION, notif
})

export {
    PUSH_NOTIFICATION, POP_NOTIFICATION,
    ALERT_SUCCESS, ALERT_WARNING, ALERT_ERROR,
    pushNotification, popNotification,
}
