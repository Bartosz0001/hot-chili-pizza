import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Card from '../features/CardContainer';
import { pizza, sides } from '../../data/dataSource';
import './menu.scss';

const Menu = () => (
    <div>
      <Header />

      <section className='menu'>
        <h2 className='menu-title'>Pizza</h2>

        {pizza.map(pizzaData => (
          <Card key={pizzaData.id} {...pizzaData} />
        ))}

        <h2 className='menu-title'>Sides</h2>

        {sides.map(sidesData => (
          <Card key={sidesData.id} {...sidesData} />
        ))}
      </section>

      <Footer />
    </div>
  );
  
  export default Menu;