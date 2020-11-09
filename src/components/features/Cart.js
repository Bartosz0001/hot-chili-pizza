import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../commons/CartItem';
import './cart.scss';

const Cart = (props) => (
    <section className='cart'>
        <h4 className='cart-title'>Your Cart:</h4>
        {props.cart.map(cartItem => (
            <CartItem key={props.cart.indexOf(cartItem)} {...cartItem} index={props.cart.indexOf(cartItem)} />
        ))}
        <button className='order-btn'>ORDER</button>
    </section>
);

Cart.propTypes = {
    cart: PropTypes.array,
}

export default Cart;