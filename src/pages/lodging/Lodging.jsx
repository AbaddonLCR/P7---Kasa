import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../data/data.json'
import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/Carousel';
import Tags from '../../components/tags/Tags';
import Host from '../../components/host/Host';
import Rating from '../../components/rating/Rating';
import Collapse from '../../components/collapse/Collapse';
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
               <div className='adress-lodging-container'>
                    <h2 className='lodging-title'>{data.title}</h2>
                    <p className='lodging-location'>{data.location}</p>
               </div>
               <div>
                    {data.tags.map(tag => {
                         return (
                              <Tags tags={tag} />
                         )
                    })}
               </div>
               <Host host={data.host}/>
               <Rating score={data.rating} />
               <div className='collapse_lodging_container'>
                    <div className='collapse_lodging'>
                         <Collapse 
                              key={`${data.id}-${data.index}`}
                              collapseTitle={<h3>Description</h3>}
                              collapseDescription={<p>{data.description}</p>}/>
                         
                    </div>
                    <div className='collapse_lodging'>
                         <Collapse 
                              key={`${data.title}-${data.index}`}
                              collapseTitle={<h3>Équipements</h3>}
                              collapseDescription={<p>{data.equipments}</p>}/>
                    </div>
               </div>
               <Footer />
          </main>
     );
};

export default Lodging;