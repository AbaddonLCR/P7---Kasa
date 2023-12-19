import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/collapse';
import aboutDatas from '../../data/about.json';
import './about.scss';


const About = () => {
     return (
          <div className='aboutPage'>
               <Header />
               <Banner />
               <div className='about_main'>
                    {aboutDatas.map(data => {
                         return (
                              <div key={data.id} className='about_main_collapse'>
                                   <Collapse title={data.title} content={data.description} />
                              </div>
                         )}
                    )}
               </div>
               <Footer />
          </div>
     );
};

export default About;