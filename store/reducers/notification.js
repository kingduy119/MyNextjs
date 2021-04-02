
import {
    PUSH_NOTIFICATION, POP_NOTIFICATION,
    ALERT_SUCCESS, ALERT_ERROR, ALERT_WARNING
} from "../actions/notification"

export default function notifications(state = [], action) {
    if(action.type == PUSH_NOTIFICATION) {

    } else if (action.type == POP_NOTIFICATION) {

    }
    return state;
}



