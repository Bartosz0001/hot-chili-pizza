import React from 'react';
import PropTypes from 'prop-types';

const Card = (pizza) => (
    <div>
        <h3>{pizza.id}. {pizza.name}</h3>
        <h3>${pizza.price}</h3>
        <button onClick={() => pizza.addToCart(pizza)}>ADD TO CART</button>
    </div>
);

Card.propTypes = {
    addToCart: PropTypes.func,
}

export default Card;