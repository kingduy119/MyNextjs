import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from "next-redux-wrapper";

import { admin } from "./admin-reducer";

// Middleware Handle:
const loggerMiddleware = createLogger();
const middlewares = [thunkMiddleware, loggerMiddleware];

// All reducer:
const reducers = combineReducers({
    admin,
});


const makeStore = context => createStore(reducers, applyMiddleware(...middlewares));

// export default store;
export const wrapper = createWrapper(makeStore);
