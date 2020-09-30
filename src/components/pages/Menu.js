import React from 'react';
import Header from '../layout/Header';
import Card from '../features/Card';
import { pizza } from '../../data/dataSource';

const Menu = () => (
    <div>
      <Header />

      <section>
        <h2>Pizza</h2>

        {pizza.map(pizzaData => (
          <Card key={pizza.id} {...pizzaData} />
        ))}
      </section>
    </div>
  );
  
  export default Menu;