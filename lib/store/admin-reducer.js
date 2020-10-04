import { createUser, listUser } from "../api/admin";

export const CREATE = "CREATE";
export const FIND_ONE = "FIND_ONE";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const FIND = "FIND";
// Action
// export const create = (user) => ({ type: CREATE, data: user });
// const findOne = (user) => ({ type: FIND, data: user });
// const updateOne = (user) => ({ type: UPDATE, data: user });
// const deleteOne = (user) => ({ type: DELETE, data: user });
export const updateList = (data) => ({ type: FIND, data });

export function onHandleEvent(action) {
    return async (dispatch) => {
        try {
            if (action === CREATE) {

            }
            else if (action === FIND) {
                let { data } = await listUser();
                dispatch(updateList(data));
            }
        } catch (error) {
            data = [{ userId: "Error", displayName: "Error", isAdmin: false }];
            dispatch(updateList(data));
        }
    }
}

// Reduce
export function admin(state = {}, action) {
    switch (action.type) {
        case FIND: return Object.assign({}, state, {
            users: action.data
        });
        default: return state;
    }
}
