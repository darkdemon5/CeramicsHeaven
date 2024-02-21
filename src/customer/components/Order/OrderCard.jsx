import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://images.orientbell.com/media/catalog/product/s/u/super_gloss_jeriba_quartzite_blue_f1.jpg' alt='' />
                        <div className='ml-5 space-y-2'>
                            <p>Sample Product5</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: 100 x 200</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹1099</p>
                </Grid>
                <Grid item xs={4}>
                    {true &&
                        <div>
                            <p>
                                <AdjustIcon className='text-green-600 mr-2 text-sm' sx={{ width: "15px", height: "15px" }} />
                                <span>Delivered On March 03</span>
                            </p>
                            <p className='text-xs'>Your Item Has Been Delivered</p>
                        </div>}
                    {false && <p>
                        <span>Expected Delivery On March 03</span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard
