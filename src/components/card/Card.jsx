import React from 'react';
import { NavLink } from 'react-router-dom';
import './card.scss';

const Card = ({id, title, cover}) => {
     return (
          <NavLink to={`/lodging/${id}`} className='gallery_card'>
               <img src={cover} alt={title} />
               <h3>{title}</h3>
          </NavLink>
     );
};

export default Card;