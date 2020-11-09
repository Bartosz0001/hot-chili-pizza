import React from 'react';
import './cartitem.scss';

const CartItem = (item) => (
    <div className='cart-item'>
        <h5 className='cart-item-name'>{item.index + 1}. {item.name} ${item.price}</h5>
        <h6 className='cart-item-adds'>{item.ingredients.join(', ')}</h6>
    </div>
);

export default CartItem;