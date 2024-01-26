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
               <section className='description-lodging-container'>
                    <div className='description-lodging-container-left'>
                         <div className='description-lodging'>
                              <h2 className='lodging-title'>{data.title}</h2>
                              <p className='lodging-location'>{data.location}</p>
                         </div>
                         <div className='tags-container'>
                              {data.tags.map((tag, index) => {
                                   return (
                                        <Tags key={index} tags={tag} />
                                   )
                              })}
                         </div>
                    </div>
                    <div className='description-lodging-container-right'>
                         <Host host={data.host}/>
                         <Rating score={data.rating} />
                    </div>
               </section>
               <section className='collapse_lodging'>
                    <div className='collapse_lodging_container'>
                         <div className='collapse_lodging_description'>
                              <Collapse 
                                   collapseTitle={<h3>Description</h3>}
                                   collapseDescription={<p>{data.description}</p>}/>
                         </div>
                         <div className='collapse_lodging_equipments'>
                              <Collapse 
                                   collapseTitle={<h3>Équipements</h3>}
                                   collapseDescription={data.equipments.map((equipments, index) => (
                                        <li key={`${index}-${equipments}`}>{equipments}</li>
                                   ))}
                              />
                         </div>
                    </div>
               </section>
               <Footer />
          </main>
     );
};

export default Lodging;