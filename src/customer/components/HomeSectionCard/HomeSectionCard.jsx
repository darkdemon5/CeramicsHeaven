import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom';

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  // const params = useParams();
  // const dispatch = useDispatch();
  const { products } = useSelector(store => store)
  // useEffect(() => {
  //   const data = { productId: params.productId }
  //   console.log("data", data)
  //   dispatch(findProductsById(data))
  // }, [params.productId])

  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      <div className="border border-gray-200 rounded-md bg-gray-50 dark:border-gray-900 rounded-b-md dark:bg-gray-900">
        <div className="relative " >
          <img src={products.product?.imageUrl} alt="" className="object-cover w-full mx-auto h-[15rem] lg:h-[15rem]" />
          <div className="flex justify-center ">
            <div className="absolute z-10 flex items-center justify-center p-2 -mt-6 text-center text-orange-600 border border-orange-400 rounded-full shadow-xl cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 hover:text-gray-50 hover:bg-orange-600 w-11 h-11 ">
              <a href="#"     >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4 bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="p-6 ">
          <div className="mb-3">
            <h2 className='dark:text-gray-400 font-semibold text-lg text-center' href="#">{products.product?.brand}</h2>
            <p className='mt-2' href="#">{products.product?.title}</p>
          </div>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
            <span className='font-semibold m-1'>₹{products.product?.discountedPrice}</span>
            <span className='line-through opacity-50 m-1'>₹{products.product?.price}</span>
            <span className='text-green-600 font-semibold m-1'>{products.product?.discountedPercent}% off</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
