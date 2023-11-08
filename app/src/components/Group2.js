import React from 'react'
import { Tabs, Tab, Button, user } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
// import { useRouter } from 'next/router';
import { Discount } from './ProductCoupon/Discount';
import { ProductSlider } from './ProductCoupon/ProductSlider';
import { White } from './ProductCoupon/White';

export const Group2 = () => {
    // const router = useRouter;
    // const handleClick = () =>{
    //     router.push


    return (
        <div className='container flex flex-col items-center justify-center'>
            <ProductSlider />
            <Discount />
            <White />
        </div>

    )
}
