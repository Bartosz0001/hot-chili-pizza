import React from 'react';
import Header from '../layout/Header';

const HomePage = () => (
    <div>
      <Header />

      <section>
        <h2>Best Pizza in the city</h2>
        <p>Since 2009 we delievered delicious pizza for our customers.</p>
        <p>Each day houndreds of people admire unique taste of our pizza, and quality of our service. We offer delicious
          pizza in our locale or delivery. We were the first to create really spicy pizza, using the hottest peppers 
          from the Mexico, for our most demanging clients.</p>
      </section>

      <section>
        <h2>Promotions</h2>
        <h3>Two sauces for free!</h3>
        <h3>Free delivery from $50!</h3>
        <h3>Second pizza 20% cheaper!</h3>
      </section>

      <section>
        <h2>Reviews</h2>
      </section>
    </div>
  );
  
  export default HomePage;