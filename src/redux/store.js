import {createStore} from 'redux';
import cardsReducer from './cardsRedux';

const initialState = {
    cart: [],
};

const storeReducer = cardsReducer;

const store = createStore(
    storeReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;