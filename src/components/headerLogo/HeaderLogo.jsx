import React from 'react';
import logo from '../../assets/logo.png'
import './headerLogo.scss';

const HeaderLogo = () => {
     return (
          <div className='logo_header'>
               <img src={logo} alt="Logo Kasa" />
          </div>
     );
};

export default HeaderLogo;