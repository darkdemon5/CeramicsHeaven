import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import CategoryCard from '../HomeSectionCard/CategoryCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const CategorySectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselInstance, setCarouselInstance] = useState(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 3.5 },
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

  const items = data.map((item) => <CategoryCard product={item} key={item.brand} />);

  return (
    <div className='relative  px-12 lg:px-8 bg-gray-100'>
    <div className='pt-2'>
      <h2 className="pb-2 text-2xl font-bold text-center text-gray-800 md:text-4xl dark:text-gray-400">
                {sectionName}
            </h2>
            <div className="w-20 mx-auto border-b border-red-700 dark:border-gray-400"></div>
            </div>
      <div className='relative p-5 ml-5'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={(carousel) => setCarouselInstance(carousel)}
        />

        {activeIndex < items.length - 3 && (
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
              left: '-3rem',
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

export default CategorySectionCarousel;
