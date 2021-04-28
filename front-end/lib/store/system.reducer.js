

export const FETCH_SYSTEM = "FETCH_SYSTEM";
export const fetchSystem = (setting) => ({ type: FETCH_SYSTEM, setting });

export const LOGIN = "LOGIN";
export const login = (user) => ({ type: LOGIN, user });

export function onSystemEvent(action) {
    return async (dispatch) => {
        if (action === FETCH_SYSTEM) {
            let setting = { views: 0, theme: "dark" };
            dispatch(fetchSystem(setting));
        }
        else if (action === LOGIN) {
            let user = "AuthenticateAPI.fetchUser";
            dispatch(login(user));
        }
    }
}


export function system(state = {
    setting: { view: 0, theme: "dark" },
    auth: { isLogin: false, user: null },
}, action) {
    switch (action.type) {
        case FETCH_SYSTEM:
            return Object.assign(state, { setting: action.setting });
        case LOGIN:
            return Object.assign(state, { user: action.user });
        default: return state;
    }
}











