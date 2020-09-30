import React from 'react';

const Card = (pizza) => (
    <div>
        <h3>{pizza.name}</h3>
        <h3>{pizza.price}</h3>
    </div>
);

export default Card;