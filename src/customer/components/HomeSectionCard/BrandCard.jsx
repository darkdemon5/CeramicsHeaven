import React from 'react';

const BrandCard = ({ product }) => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[20rem] mx-2 border border-solid border-gray-300 '>
            <div className='w-full h-[8rem] mt-2'>
                <img className='object-cover w-full h-full' src={product.imageUrl} alt='' />
            </div>


            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
            </div>

        </div>
    );
};

export default BrandCard;