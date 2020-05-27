import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {createWrapper, HYDRATE} from "next-redux-wrapper";

import { todos, filter } from './todo';

/**
 * Middleware Handle
 */
const loggerMiddleware = createLogger();

/**
 * All reducer
 */
const reducers = combineReducers({
    todos,
    filter
});

// const store = (preloadstate = {}) => {
//     console.log("Created Redux Store");
//     return createStore(
//         reducers,
//         // preloadstate,
//         applyMiddleware(
//             thunkMiddleware,
//             loggerMiddleware,
//         )
//     )
// }

const makeStore = context => createStore(reducers);

// export default store;
export const wrapper = createWrapper(makeStore);
