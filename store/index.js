import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from 'redux-thunk';

import notifications from "./reducers/notification";

// Middleware Handle:
const loggerMiddleware = createLogger();
const middlewares = [
    thunkMiddleware,
    // loggerMiddleware
];

// All reducer:
const reducers = combineReducers({
    notifications,
});



const store = (context) => createStore(reducers, applyMiddleware(...middlewares));
const wrapper = createWrapper(store);

export { store, wrapper };

