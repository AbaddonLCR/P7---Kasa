import React from 'react';

const Host = (props) => {

     const infoHost = props.host; 

     return (
          <div className='host'>
               <p className='host_name'>{infoHost.name}</p>
               <img className='host_picture' src={infoHost.picture} alt={infoHost.name} />
          </div>
     );
};

export default Host;