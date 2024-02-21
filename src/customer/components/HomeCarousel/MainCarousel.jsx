import React from 'react';
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = mainCarouselData.map((item, index) => (
        <div className='flex w-full h-[650px] items-center'>
            <img key={index} className='cursor-pointer object-cover w-full h-full' role='presentation' src={item.image} alt='' />
        </div>


    ));

    return (
        <AliceCarousel items={items}
            disableButtonsControls
            autoPlay
            disableDotsControls
            autoPlayInterval={2500}
            infinite />
    );
}

export default MainCarousel;
