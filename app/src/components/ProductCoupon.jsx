import React from 'react'
import { Discount } from '../components/ProductCoupon/Discount';
import { ProductSlider } from '../components/ProductCoupon/ProductSlider';
import { White } from '../components/ProductCoupon/White';

export const ProductCoupon = () => {
    return (
        <div className='container flex flex-col items-center justify-center'>
            <ProductSlider />
            <Discount />
            <White />
        </div>
    )
}
