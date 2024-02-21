import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import {Grid} from '@mui/material'
import {Box} from '@mui/material'
import {deepPurple} from '@mui/material/colors'
import StarIcon from '@mui/icons-material/StarBorderOutlined';

const OrderDetails = () => {
    return (
        <div className='mt-20 px-5 lg:px-20 mb-5'>
            <div>
                <h1 className='font-bold text-xl py-6'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3}/>
            </div>
            <Grid className='space-y-5' container>
            {[1,1,1,1,1,1].map((item)=>
                <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:'center',justifyContent:'space-between'}}>
                    <Grid item sx={6}>
                        <div className='flex items-center  space-x-4'>
                            <img className='w-[5rem] h-[6rem] object-cover object-top' src='https://images.orientbell.com/media/catalog/product/s/u/super_gloss_jeriba_quartzite_blue_f1.jpg' alt=''/>
                            <div className='space-y-1 ml-5'>
                                <p className='font-semibold'>Sample Product5</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Color: Black</span>
                                    <span> Size: 100 x 200</span>
                                </p>
                                <p>Brand: Kajaria</p>
                                <p>₹1099</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarIcon sx={{fontSize:'2rem'}} className='px-2 text-5xl'/>
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>
            )}
            </Grid>
        </div>

    )
}

export default OrderDetails
