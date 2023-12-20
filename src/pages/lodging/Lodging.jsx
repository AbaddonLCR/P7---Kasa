import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './lodging.scss';

const Lodging = () => {
     return (
          <div className='lodgingPage'>
               <Header />
               <h1>Hébergements</h1>
               <Footer />
          </div>
     );
};

export default Lodging;