import React from 'react';
import datas from '../../data/data.json';

const Host = () => {
     return (
          <div className='host'>
               <p className='host_name'>{datas.host.name}</p>
               <img className='host_picture' src={datas.host.picture} alt={datas.host.name} />
          </div>
     );
};

export default Host;