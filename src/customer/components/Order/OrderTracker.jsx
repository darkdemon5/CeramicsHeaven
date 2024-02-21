import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered",   
];

const OrderTracker = ({ activeStep }) => {
    return (
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step>
                        <StepLabel sx={{ color: "#9155FD", fontSize: '14px' }}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default OrderTracker;
