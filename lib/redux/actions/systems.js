
const ALERT_SUCCESS = "ALERT_SUCCESS";
const ALERT_ERROR = "ALERT_ERROR";
const ALERT_WARNING = "ALERT_WARNING";

const PUSH_NOTIFICATION = "PUSH_NOTIFICATION";
const POP_NOTIFICATION = "POP_NOTIFICATION";

const DIALOG_REGISTER = "DIALOG_REGISTER";

const showDialog = (name, dialog) => ({ type: name, dialog })

const pushNotification = (notify) => ({
    type: PUSH_NOTIFICATION, notify
})
const popNotification = (index) => ({
    type: POP_NOTIFICATION, index
})

export {
    DIALOG_REGISTER,
    PUSH_NOTIFICATION, POP_NOTIFICATION,
    ALERT_SUCCESS, ALERT_WARNING, ALERT_ERROR,
    showDialog,
    pushNotification, popNotification,
}
