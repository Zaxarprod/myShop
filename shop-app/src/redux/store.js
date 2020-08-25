import {createStore, compose} from 'redux';
import {combineReducers} from 'redux';
import {applyMiddleware} from 'redux';
import Middleware from 'redux-thunk';
import homeReducer from "./home-reducer";
import shopReducer from "./shop-reducer";
import filterReducer from "./filter-reducer";
import appReducer from "./app-reducer";
import footerReducer from "./footer-reducer";


let reducers = combineReducers(
    {
        home: homeReducer,
        shop: shopReducer,
        filter: filterReducer,
        app: appReducer,
        footer: footerReducer,
    }
)

const store = createStore(reducers, applyMiddleware(Middleware));

export default store;