import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
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
                              <Collapse
                              key={`${data.title}-${data.index}`}
                              collapseTitle={<h3>{data.title}</h3>}
                              collapseDescription={<p>{data.description}</p>}
                              />
                         )}
                    )}
               </div>
               <Footer />
          </div>
     );
};

export default About;