import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from "next-redux-wrapper";

import { system } from "./system.reducer";
import { todos, filter } from './todo'; // Template
import { admin } from "./admin-reducer";

// Middleware Handle:
const loggerMiddleware = createLogger();

const middlewares = [thunkMiddleware, loggerMiddleware];

// All reducer:
const reducers = combineReducers({
    system,
    todos,
    filter,
    admin,
});


const makeStore = context => createStore(reducers, applyMiddleware(...middlewares));

// export default store;
export const wrapper = createWrapper(makeStore);
