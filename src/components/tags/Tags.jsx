import React from 'react';
import './tags.scss';

const Tags = ({tags}) => {

     const Tags = {tags};

     return (
          <div className='tag'>
               <span>
                    {Tags.tags}
               </span>
          </div>
     );
};

export default Tags;