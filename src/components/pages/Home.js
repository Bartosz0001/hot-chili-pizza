import React from 'react';
import Header from '../layout/Header';
import './home.scss';

const HomePage = () => (
    <div>
      <Header />

      <section className='intro'>
        <h2 className='section-title'>Best Pizza in the city</h2>
        <p>Since 2009 we delievered delicious pizza for our customers.</p>
        <p>Each day houndreds of people admire unique taste of our pizza, and quality of our service. We offer delicious
          pizza in our locale or delivery. We were the first to create really spicy pizza, using the hottest peppers 
          from the Mexico, for our most demanging clients.</p>
      </section>

      <section className='promotions'>
        <h2 className='section-title'>Promotions</h2>
        <div className='wrapper'>
          <div className='box'>
            <p>Two sauces for free!</p>
            <img src='https://storage.needpix.com/rsynced_images/sauce-4171459_1280.jpg' alt='sauces' />
          </div>
          <div className='box'>
            <p>Free delivery from $50!</p>
            <img src='https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='delivery' />
          </div>
          <div className='box'>
            <p>Second pizza 20% cheaper!</p>
            <img src='https://images.pexels.com/photos/4109078/pexels-photo-4109078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='two pizzas' />
          </div>
        </div>   
      </section>

      <section className='reviews'>
        <h2 className='section-title'>Reviews</h2>
      </section>
    </div>
  );
  
  export default HomePage;