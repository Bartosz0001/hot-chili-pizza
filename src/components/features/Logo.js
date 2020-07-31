import React from 'react';

import './Logo.scss';

const Logo = () => (
    <div className='component'>
        <img className='image' src='https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='pizza' />
        <div className='title-label'>
          <div className='pepper'>
            <img className='image-pepper' src='https://icon-library.net/images/pepper-icon/pepper-icon-18.jpg' alt='pepper'/>
          </div>
          <h1 className='title'>Hot chili Pizza!</h1>
        </div>
    </div>
  );
  
  export default Logo;