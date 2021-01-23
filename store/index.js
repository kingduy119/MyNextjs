import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from "next-redux-wrapper";

import { topbar } from "./static/topbar.reduce";

// Middleware Handle:
const loggerMiddleware = createLogger();
const middlewares = [
    thunkMiddleware,
    // loggerMiddleware
];

// All reducer:
const reducers = combineReducers({
    topbar,
});


const makeStore = context => 
    createStore(reducers, applyMiddleware(...middlewares));

export default createWrapper(makeStore);
