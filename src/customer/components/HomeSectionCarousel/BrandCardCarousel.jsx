import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import BrandCard from '../HomeSectionCard/BrandCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const BrandCardCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselInstance, setCarouselInstance] = useState(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (carouselInstance) {
      carouselInstance.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselInstance) {
      carouselInstance.slideNext();
    }
  };

  const syncActiveIndex = ({item }) => setActiveIndex(item);

  const items = data.map((item) => <BrandCard product={item} key={item} />);

  return (
    <div className='relative px-4 lg:px-8'>
      <h2 className='text-2xl font-extrabold text-center text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={(carousel) => setCarouselInstance(carousel)}
        />

        {activeIndex < items.length - 5 && (
          <Button
            variant='contained'
            className='z-50'
            onClick={slideNext}
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '-3rem',
              transform: 'translate(-50%) rotate(90deg)',
              bgcolor: 'white',
            }}
            aria-label='next'
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
          </Button>
        )}

        {activeIndex > 0 && (
          <Button
            variant='contained'
            className='z-50'
            onClick={slidePrev}
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '-2rem',
              transform: 'translate(50%) rotate(90deg)',
              bgcolor: 'white',
            }}
            aria-label='prev'
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default BrandCardCarousel;
