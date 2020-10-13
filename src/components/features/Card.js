import React from 'react';
import PropTypes from 'prop-types';

const Card = (pizza, props) => (
    <div>
        <h3>{pizza.name}</h3>
        <h3>{pizza.price}</h3>
        <button onclick={() => props.addToCart()}>ADD TO CART</button>
    </div>
);

Card.propTypes = {
    addToCart: PropTypes.func,
}

export default Card;