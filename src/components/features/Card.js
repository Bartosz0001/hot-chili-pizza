import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = (pizza) => (
    <div className='card-box'>
        <h3>{pizza.id}. {pizza.name}</h3>
        <h3 className='price'>${pizza.price}</h3>
        <button onClick={() => pizza.addToCart(pizza)} className='card-btn'>ADD TO CART</button>
    </div>
);

Card.propTypes = {
    addToCart: PropTypes.func,
}

export default Card;