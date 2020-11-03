import React from 'react';
import {NavLink} from 'react-router-dom';
import Cart from '../features/CartContainer';

import Logo from '../features/Logo';
import './header.scss';

const Header = () => (
    <div>
        <Logo />
        <nav className='nav-list'>
            <NavLink to='/' activeClassName='active'>About us</NavLink>
            <NavLink to='/menu' activeClassName='active'>Menu</NavLink>
            <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
            <button className='icon-cart'>CART</button>
        </nav>
        <Cart />
    </div>
  );
  
  export default Header;