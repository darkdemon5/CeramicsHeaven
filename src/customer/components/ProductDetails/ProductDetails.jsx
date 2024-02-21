import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Disclosure, RadioGroup } from '@headlessui/react'
import Rating from '@mui/material/Rating';
import { Box, Button, Grid, LinearProgress } from '@mui/material';
import ProductReviewCard from './ProductReviewCard';
import { tilesdata } from '../../../Data/tilesdata';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from 'react-redux'
import { findProductsById } from '../../../State/Product/Action';
import { store } from '../../../State/store';


const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const params = useParams();
    // console.log(params);
    // const product = tilesdata[params.productId - 1]
    const [selectedSize, setSelectedSize] = useState(" ")
    // product.sizes[1]
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products } = useSelector(store => store);
    const handleAddToCart = () => {
        navigate("/cart");
    }
    console.log("----", products)
    useEffect(() => {
        const data = { productId: params.productId }
        console.log("data", data)
        dispatch(findProductsById(data))
    }, [params.productId])
    return (
        < div className="bg-white lg:px-20" >
            <div className="pt-6">
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden rounded-lg w-[30rem] h-[30rem] border-2 border-gray-400 ">
                            <img
                                src={products.product?.imageUrl}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                        <div className="lg:col-span-2">
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{products.product?.title}</h1>
                            <h1 className='text-lg lg:text-xl text-gray-900 opacity-60 pt-1'>{products.product?.discription}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>

                            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                                <p className='font-semibold'>₹ {products.product?.discountedPrice}</p>
                                <p className='opacity-50 line-through'>₹ {products.product?.price}</p>
                                <p className='text-green-600 font-semibold'>{products.product?.discountedPercent}% off</p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <div className='flex items-center space-x-3'>
                                    <Rating name="read-only" value={4.5} readOnly />
                                    <p className='opacity-50 text-sm'>56540 Ratings</p>
                                    <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 '>3870 Reviews</p>
                                </div>
                            </div>

                            <form className="mt-10">
                                {/* Sizes */}
                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    </div>

                                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                            {products.product?.sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.value}
                                                    value={size}
                                                    disabled={size.quantity === 0}
                                                    className={({ active }) =>
                                                        classNames(
                                                            size.quantity > 0
                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                            active ? 'ring-2 ring-indigo-500' : '',
                                                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{`${size.width} X ${size.height}`}</RadioGroup.Label>
                                                            {size.quantity > 0 ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'border' : 'border-2',
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        'pointer-events-none absolute -inset-px rounded-md'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className='mt-3'>
                                    <Button onClick={handleAddToCart} variant='contained' sx={{ px: '2rem', py: '1rem', bgcolor: '#9155fd' }}>
                                        Add to cart
                                    </Button>
                                </div>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Categories</h3>
                                <Disclosure as="div" className="border-b border-gray-200 py-3">
                                    {({ open }) => (
                                        <>
                                            <h3 className="">
                                                <Disclosure.Button className="flex w-full items-center justify-between bg-white text-sm text-gray-400 hover:text-gray-700">
                                                    <span className="font-semibold text-lg text-gray-900">CHARACTERISTICS</span>
                                                    <span className="flex items-center">
                                                        {open ? (
                                                            <ArrowDropUpIcon className="h-5 w-5" aria-hidden="true" />
                                                        ) : (
                                                            <ArrowDropDownIcon className="h-5 w-5" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel>
                                                <div className="space-y-4 py-5">
                                                    <div className='flex justify-between'>
                                                        <p className='text-gray-500'>Brand</p>
                                                        <p className='to-black'>{products.product?.brand}</p>
                                                    </div>
                                                    <div className='flex justify-between'>
                                                        <p className='text-gray-500'>Category</p>
                                                        <p className='to-black'>{products.product?.category.categoryName}</p>
                                                    </div>
                                                    <div className='flex justify-between'>
                                                        <p className='text-gray-500'>Color</p>
                                                        <p className='to-black'>{products.product?.color}</p>
                                                    </div>
                                                    {/* <div className='flex justify-between'>
                                                        <p className='text-gray-500'>Thickness</p>
                                                        <p className='to-black'>{products.product?.thickness}</p>
                                                    </div>
                                                    <div className='flex justify-between'>
                                                        <p className='text-gray-500'>Water Absorption</p>
                                                        <p className='to-black'>{products.product?.waterAbsorption}</p>
                                                    </div> */}
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>

                        </div>
                    </div>
                </section>

                {/* rating and reviews */}
                <section>
                    <h1 className='font-semibold text-lg pb-4'>Recent Review And Rating </h1>

                    <div className='border p-5'>
                        <Grid container spacing={7}>
                            <Grid item xs={7}>
                                <div className='space-y-5'>
                                    {[1, 1, 1, 1].map((item) => <ProductReviewCard />)}
                                </div>
                            </Grid>

                            <Grid item xs={5}>
                                <h1 className='text-xl font-semibold pb-2'>Product Ratings</h1>
                                <div className='flex items-center space-x-3'>
                                    <Rating value={4.6} precision={0.5} readOnly />
                                    <p className='opacity-60'>54890 Ratings</p>
                                </div>
                                <Box className='mt-5 space-y-3'>
                                    <Grid container alignItems='center' gap={2}>
                                        <Grid item xs={2}>
                                            <p>Excellent</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }} variant='determinate' value={40} color='success' />
                                        </Grid>
                                    </Grid>

                                    <Grid container alignItems='center' gap={2}>
                                        <Grid item xs={2}>
                                            <p>Very Good</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }} variant='determinate' value={30} color='success' />
                                        </Grid>
                                    </Grid>

                                    <Grid container alignItems='center' gap={2}>
                                        <Grid item xs={2}>
                                            <p>Good</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }} variant='determinate' value={25} />
                                        </Grid>
                                    </Grid>

                                    <Grid container alignItems='center' gap={2}>
                                        <Grid item xs={2}>
                                            <p>Average</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }} variant='determinate' value={20} color='warning' />
                                        </Grid>
                                    </Grid>

                                    <Grid container alignItems='center' gap={2}>
                                        <Grid item xs={2}>
                                            <p>Poor</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }} variant='determinate' value={10} color='error' />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </section>

                {/* Similar Products */}
                <section className='pt-5 pb-5'>
                    <h1 className='py-5 text-xl font-bold'>Similar Products</h1>
                    <div className='flex flex-wrap space-y-5'>
                        {/* {products.product?.map((item) => <HomeSectionCard product={item} />)} */}
                        {Array.isArray(products.product) ? (
                            products.product.map((item) => <HomeSectionCard product={item} />)
                        ) : (
                            <p>No similar products available</p>
                        )}

                    </div>
                </section>
            </div>
        </div >
    )
}
