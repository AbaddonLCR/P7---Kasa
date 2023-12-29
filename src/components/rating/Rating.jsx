// import React from 'react';
// import { useParams } from 'react-router-dom';
import redStar from '../../assets/red_star.png';
import greyStar from '../../assets/grey_star.png';
import './rating.scss';

const Rating = (props) => {

     const starRating = props.score;
     const stars = [1, 2, 3, 4, 5];

     return (
          <div className='rating'>
               {stars.map((rate, index) => 
                    starRating >= rate ? <img key={`${rate}-${index}`} src={redStar} alt="note" /> : <img key={`${rate}-${index}`} src={greyStar} alt="note" />
               )}
          </div>
     )
};

export default Rating;