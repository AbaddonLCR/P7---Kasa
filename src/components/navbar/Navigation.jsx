import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
     return (
          <div classname="navigation">
               <ul className='navigation_list'>
                    <NavLink to="/" className={({ isActive}) => isActive ? "active" : null}>
                         <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive}) => isActive ? "active" : null}>
                         <li>A Propos</li>
                    </NavLink>
               </ul>
          </div>
     );
};

export default Navigation;