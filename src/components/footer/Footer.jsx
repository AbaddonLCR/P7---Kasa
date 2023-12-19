import React from 'react';
import logo from '../../assets/logo_footer.png'
import './footer.scss'

const Footer = () => {
     return (
          <div className='footer'>
               <img src={logo} alt="Logo Kasa" />
               <p className='footer_copyright'> © 2020 Kasa. All rights reserved</p>
          </div>
     );
};

export default Footer;         
