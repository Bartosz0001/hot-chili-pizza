import React from 'react';
import {NavLink} from 'react-router-dom';

import Logo from '../features/Logo';
import './header.scss';

const Header = () => (
    <div>
        <Logo />
        <nav className='nav-list'>
            <NavLink to='/' activeClassName='active'>About us</NavLink>
            <NavLink to='/menu' activeClassName='active'>Menu</NavLink>
            <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
        </nav>
    </div>
  );
  
  export default Header;