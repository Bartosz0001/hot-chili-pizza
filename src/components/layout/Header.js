import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Cart from '../features/CartContainer';

import Logo from '../features/Logo';
import './header.scss';

const Header = () => {
    const [isToggle, setToggle] = useState(false);
    return (
    <div className='wrapper'>
        <Logo />
        <nav className='nav-list'>
            <NavLink to='/' activeClassName='active'>About us</NavLink>
            <NavLink to='/menu' activeClassName='active'>Menu</NavLink>
            <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
            <button onClick={() => setToggle(!isToggle)} className='icon-cart'>CART</button>
        </nav>
        <div className={isToggle ? 'cart-visible' : 'cart-hidden'}>
          <Cart />
        </div>
        
    </div>
  );
};
  
  export default Header;