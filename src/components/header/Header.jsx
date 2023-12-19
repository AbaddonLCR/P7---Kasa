import React from 'react';
import Navigation from '../navbar/Navigation';
import HeaderLogo from '../headerLogo/HeaderLogo';
import './header.scss';

const Header = () => {
     return (
               <div className='header_container'>
                    <HeaderLogo />
                    <Navigation />
               </div>
     );
};

export default Header;