import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Contact = () => (
    <div>
      <Header />

      <section className='contact'>
        <div className='contact-wrapper'>
          <div className='contact-box'>
            <h2>Adress:</h2>
            <h3>1600 Pennsylvania Avenue NW, Washington, DC</h3>
          </div>
          <div className='contact-box'>
            <h2>Contact</h2>
            <h3>+1 202-456-1111</h3>
          </div>
          <div className='contact-box'>
            <h2>Open hours:</h2>
            <h3>12:00 - 24:00</h3>
          </div>
        </div>

        <div className='map'>
          <h2>Map:</h2>
        </div>
      </section>

      <Footer />
    </div>
  );
  
  export default Contact;