import React, { useState } from 'react';
import arrow from '../../assets/arrow.png';
import './collapse.scss';

const Collapse = ({collapseTitle, collapseDescription}) => {

     const [isOpen, setIsOpen] = useState(false);

     return (
          <div className='collapse'>
               <div className='collapse_title' onClick={() => setIsOpen(!isOpen)}>
                    {collapseTitle}
                    <img className={isOpen ? 'arrow_up' : 'arrow_down'} src={arrow} alt="description" />     
               </div>
               <div className={isOpen ? 'collapse_description' : 'collapse_description_hidden'}>
                    {Array.isArray(collapseDescription) ? collapseDescription.map((item, index) => {
                         return (<p key={index}>{item}</p>)}) : collapseDescription}
               </div>
          </div>
     );
};

export default Collapse;