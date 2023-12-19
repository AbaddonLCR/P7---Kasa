import React from 'react';
import datas from '../../data/data.json'
import Card from '../card/Card';
import './gallery.scss';

const Gallery = () => {
     return (
          <div className='home_gallery_container'>
               {datas.map(data => {
                    return (
                         <Card
                              key={data.id}
                              id={data.id}
                              title={data.title}
                              cover={data.cover}
                         />
                    )
               })}
          </div>
     );
};

export default Gallery;