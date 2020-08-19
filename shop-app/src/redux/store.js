import {createStore, compose} from 'redux';
import {combineReducers} from 'redux';
import {applyMiddleware} from 'redux';
import Middleware from 'redux-thunk';


let reducers = combineReducers(
    {

    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(Middleware)))

export default store