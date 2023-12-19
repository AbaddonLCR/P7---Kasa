import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Gallery from '../../components/gallery/Gallery';
import './home.scss';


const Home = () => {
     return (
          <div className='homePage'>
               <Header />
               <Banner />
               <Gallery />
               <Footer />
          </div>

          
     );
};

export default Home;