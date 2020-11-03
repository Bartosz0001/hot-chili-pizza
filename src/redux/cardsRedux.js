//selectors

export const getCart = (state) => state.cart;

//action names creator

const reducerName = 'cart'; 
const createActionName = name => `app/${reducerName}/${name}`;

//action types

export const ADD_TO_CART = createActionName('ADD_TO_CART');

//action creators

export const createAction_addToCart = payload => ({payload, type: ADD_TO_CART});

//reducer

export default function reducer(state = [], action = {}) {
    switch(action.type) {
        case ADD_TO_CART:
            return [...state, {...action.payload}];
        default:
            return state;
    }
}