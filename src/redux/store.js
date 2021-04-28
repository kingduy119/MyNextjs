import { 
    createStore, 
    // applyMiddleware, 
} from 'redux';
import { createWrapper } from "next-redux-wrapper";
// import Saga from 'redux-saga';
// import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
// import { createLogger } from 'redux-logger';

// const sagaMiddleware = Saga();

// Middleware Handle:
// const loggerMiddleware = createLogger();

// sagaMiddleware.run(rootSaga);

const store = () => createStore(
    rootReducer,
    // applyMiddleware(sagaMiddleware)
);

const wrapper = createWrapper(store);
export { wrapper };

