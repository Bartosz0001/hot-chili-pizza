//selectors

export const getCart = (state) => state.cart;

//action names creator

const reducerName = 'cart'; 
const createActionName = name => `app/${reducerName}/${name}`;

//action types

export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

//action creators

export const createAction_addToCart = payload => ({payload, type: ADD_TO_CART});
export const createAction_removeFromCart = payload => ({payload, type: REMOVE_FROM_CART});

//reducer

export default function reducer(state = [], action = {}) {
    switch(action.type) {
        case ADD_TO_CART:
            return [...state, {...action.payload}];
        case REMOVE_FROM_CART:
            state.splice(state.indexOf(state.find(element => (element.name === action.payload.name))), 1)
            return [...state];
        default:
            return state;
    }
}