
import {
    DIALOG_REGISTER,
    PUSH_NOTIFICATION, POP_NOTIFICATION,
    ALERT_SUCCESS, ALERT_ERROR, ALERT_WARNING
} from "../actions/systems"

const alertSS = {
    type: "alert-success", 
    body: <strong>Success! <small>asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd</small></strong> 
};
const alertWN = {type: "alert-warning", body: <strong>Warning! validate value.</strong> };
const alertERR = {type: "alert-danger", body: <strong>Error! There are many erorrs.</strong> };

function notifications(state = [alertSS, alertWN, alertERR], action) {
    if(action.type == PUSH_NOTIFICATION) {
        state.push(action.notify)
    } else if (action.type == POP_NOTIFICATION) {
        if(state.length > 0) state.splice(action.index, 1);
    }
    return state;
}

function modals(state = {
    currentState: '', dialog: null
}, action) {
    console.log(`DIALOG: ${action.type}`);
    if(action.type == DIALOG_REGISTER
        && state.currentState != action.type
    ) {
        state.currentState = action.type;
        state.dialog = action.dialog;
    }

    return state;
}

export { notifications, modals }
