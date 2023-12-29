import React, { useState } from 'react';
import arrowLeft from '../../assets/chevron_carousel_left.png';
import arrowRight from '../../assets/chevron_carousel_right.png';
import './carousel.scss';

const Carousel = (props) => {

     const imageCarousel = props.pictures;
     const [currentIndex, setCurrentIndex] = useState(0)

     const nextImage = () => {
          setCurrentIndex(currentIndex +1)
          if(currentIndex === imageCarousel.length - 1)
          setCurrentIndex(0)
     }

     const previousImage = () => {
          setCurrentIndex(currentIndex - 1)
          if(currentIndex === 0)
          setCurrentIndex(imageCarousel.length - 1)
     }

     return (
          <div style={{backgroundImage : `url(${imageCarousel[currentIndex]})`}} className='carousel'>
               {imageCarousel.length > 1 &&
               
               <div>
                    <img 
                    className='carousel_arrow carousel_arrow_right' 
                    src={arrowRight} 
                    alt='show next Slide' 
                    onClick={nextImage} 
                    />
                    <img 
                    className='carousel_arrow carousel_arrow_left' 
                    src={arrowLeft} 
                    alt="show previous Slide" 
                    onClick={previousImage} 
                    />
               <p className='slideCount'>{currentIndex + 1} / {imageCarousel.length}</p>
               </div>
               }
          </div>
     );
};

export default Carousel;