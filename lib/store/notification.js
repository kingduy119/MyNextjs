const PUSH_NOTIFY = "PUSH_NOTIFY";
const POP_NOTIFY = "POP_NOTIFY";

const pushNotify = (title, content) => ({
    type: PUSH_NOTIFY,
    title: title,
    content: content,
})

const popNotify = (key) => ({
    type: POP_NOTIFY,
    key: key,
})


function notifies(state = [], action) {
    switch (action.type) {
        case PUSH_NOTIFY:
            return [
                ...state,
                {
                    title: action.title,
                    content: action.content
                }
            ];
        case POP_NOTIFY:
            state.splice(action.key, 1);
            return state;
        default:
            return state;
    }
}

export { pushNotify, popNotify, notifies };