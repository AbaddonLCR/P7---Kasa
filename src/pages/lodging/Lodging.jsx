import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../data/data.json'
import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/Carousel';
import Tags from '../../components/tags/Tags';
import Host from '../../components/host/Host';
import Rating from '../../components/rating/Rating';
// import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';
import NotFound from '../notFound/NotFound';
import './lodging.scss';

const Lodging = () => {

     const {id} = useParams();
     const data =  datas.find(data => data.id === id);
     if(!data) {
          return <NotFound />
     }

     return (
          <main className='lodgingPage'>
               <Header />
               <Carousel pictures={data.pictures} picturesLength={data.pictures.length} />
               <Tags />
               <Host host={data.host}/>
               <Rating />
               {/* <Collapse /> */}
               <h1>Hébergements</h1>
               <Footer />
          </main>
     );
};

export default Lodging;