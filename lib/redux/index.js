import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from 'redux-thunk';

import { alerts, modals } from "./reducers/systems";

// Middleware Handle:
const loggerMiddleware = createLogger();
const middlewares = [
    thunkMiddleware,
    // loggerMiddleware
];

// All reducer:
const reducers = combineReducers({
    alerts, modals
});


const store = (context) => createStore(reducers, applyMiddleware(...middlewares));
const wrapper = createWrapper(store);

export { store, wrapper };

