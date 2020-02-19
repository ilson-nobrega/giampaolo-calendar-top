import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducer';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createHashHistory';
import { createLogger } from 'redux-logger'; 

const logger = createLogger({
    collapsed: true
});

const createRootReducer = () => {
    const appReducer = combineReducers({
        ...reducers,
        routing: routerReducer
    });
    return (state, action) => appReducer(state, action);
};
const hashHistory = createHistory();  
const store = createStore(
    createRootReducer(),
        applyMiddleware(
            thunkMiddleware,
            routerMiddleware(hashHistory),
            logger
        )
);

const history = syncHistoryWithStore(hashHistory, store);
window.store= store;
export { store, history };