
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

let todoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: todoId++,
    text: text,
});

// export const toggleTodo =

export function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ];
        default:
            return state;
    }
}
