
import {
    PUSH_NOTIFICATION, POP_NOTIFICATION,
    ALERT_SUCCESS, ALERT_ERROR, ALERT_WARNING
} from "../actions/notification"

const alertSS = {type: "alert-success", body: <strong>Success!</strong> };
const alertWN = {type: "alert-warning", body: <strong>Success!</strong> };

export default function notifications(state = [alertSS, alertWN], action) {
    if(action.type == PUSH_NOTIFICATION) {
        state.push(action.notify)
    } else if (action.type == POP_NOTIFICATION) {
        if(state.length > 0) state.splice(action.index, 1);
    }
    return state;
}



