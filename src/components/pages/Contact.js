import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import './contact.scss';

const Contact = () => (
    <div>
      <Header />

      <section className='contact'>
        <div className='contact-wrapper'>
          <div className='contact-box'>
            <h2 className='contact-title'>Adress:</h2>
            <h3>1326 Madison Ave, New York, NY</h3>
          </div>
          <div className='contact-box'>
            <h2 className='contact-title'>Contact:</h2>
            <h3>+00 242-474-2681</h3>
          </div>
          <div className='contact-box'>
            <h2 className='contact-title'>Open hours:</h2>
            <h3>12:00 - 24:00</h3>
          </div>
        </div>

        <div className='map'>
          <img src='https://www.google.pl/maps/vt/data=BAOiGvACzKw19tsBkEcukG7ARZZHNo4-z6ul_twi82G6ponp32AERvHuxdjEpftF7Tc_wIGUR2_rWTkKz0rQANlCjBfgn4w1YcUYwafH8qGPr-13X31bk2SYZn6fKuT99sW4dmN9hNxHsJteZoeq8esvqnuN8nc1KPkpz7aR6zMMxkxe6z-CT7BAIeWYZT-nRb4yRhSxlzvrPIfMPEKW3qyQHqODddqFULW91XB4YfKKi6ZS2ssN-GaMZCflrTNJBJTjSTYhaDY9a2v-Mv4DNsSJTGYtfaN81e2WdwVhwCeQcJKSWi0vDk6FyzB-RhA' alt='google map' />
        </div>
      </section>

      <Footer />
    </div>
  );
  
  export default Contact;