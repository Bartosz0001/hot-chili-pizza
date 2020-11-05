import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../commons/CartItem';

const Cart = (props) => (
    <section>
        <h4>Your Cart</h4>
        {props.cart.map(cartItem => (
            <CartItem key={props.cart.indexOf(cartItem)} {...cartItem} index={props.cart.indexOf(cartItem)} />
        ))}
        <button>ORDER</button>
    </section>
);

Cart.propTypes = {
    cart: PropTypes.array,
}

export default Cart;