import React from 'react';
import PropTypes from 'prop-types';
import './cartitem.scss';

const CartItem = (item) => (
    <div className='cart-item'>
        <h5 className='cart-item-name'>{item.index + 1}. {item.name} ${item.price}
        <button className='cart-item-delete' onClick={() => item.removeFromCart(item)}>X</button></h5>
        <h6 className='cart-item-adds'>{item.ingredients.join(', ')}</h6>
    </div>
);

CartItem.propTypes = {
    removeFromCart: PropTypes.func,
};

export default CartItem;