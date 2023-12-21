import React from 'react';
import Header from '../../components/header/Header';
import Tags from '../../components/tags/Tags';
// import Host from '../../components/host/Host';
import Rating from '../../components/rating/Rating';
import Footer from '../../components/footer/Footer';
import './lodging.scss';

const Lodging = () => {
     return (
          <div className='lodgingPage'>
               <Header />
               <Tags />
               {/* <Host /> */}
               <Rating />
               <h1>Hébergements</h1>
               <Footer />
          </div>
     );
};

export default Lodging;