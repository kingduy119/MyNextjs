import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { todos } from './todo';

/**
 * Middleware Handle
 */
const loggerMiddleware = createLogger();

/**
 * All reducer
 */
const reducers = combineReducers({
    todos,
});

const store = (preloadstate) => {
    console.log("Created Redux Store");
    return createStore(
        reducers,
        preloadstate,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        )
    )
}

export default store;

