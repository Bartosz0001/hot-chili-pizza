import React from 'react';
import PropTypes from 'prop-types';
import './reviews.scss';

const Reviews = (reviews) => (
    <div className='carousel'>
        <div className='frame'>
            <h3 className='reviewer'>{reviews.name}</h3>
            <p>{reviews.opinion}</p>
            <p>{reviews.starAmount}</p>
          </div>
    </div>
);

Reviews.propTypes = {
    reviews: PropTypes.object,
}

export default Reviews;