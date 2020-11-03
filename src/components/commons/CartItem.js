import React from 'react';

const CartItem = (item) => (
    <div>
        <h5>{item.index + 1}. {item.name} ${item.price}</h5>
        <h6>{item.ingredients.join(', ')}</h6>
    </div>
);

export default CartItem;