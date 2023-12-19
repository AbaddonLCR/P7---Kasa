import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import banner_home from '../../assets/home_cover.png'
import banner_about from '../../assets/about_cover.png'
import './banner.scss'

const Banner = () => {

     const [homePage, setHomePage] = useState(false);
     const location = useLocation();

     useEffect(() => {
          if(location.pathname === '/'){
               setHomePage(true)
          };
          //eslint-disable-next-line
     }, [])

     return (
          <div className='banner_container'>
               {homePage ? <img src={banner_home} alt="banner rocky sea shore home kasa" /> : <img src ={banner_about} alt="banner moutain about kasa" />}
               {homePage ? <p>Chez vous, partout et ailleurs</p> : null }
          </div>
     );
};

export default Banner;