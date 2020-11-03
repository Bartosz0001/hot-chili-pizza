import {combineReducers, createStore} from 'redux';
import cartReducer from './cardsRedux';

const initialState = {
    cart: [],
};

const reducers = {
    cart: cartReducer,
};

const storeReducer = combineReducers(reducers);

const store = createStore(
    storeReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;