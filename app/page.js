"use client"
import { ProductSlider } from './src/components/ProductCoupon/ProductSlider'
import { Discount } from './src/components/ProductCoupon/Discount'
import {NextUIProvider} from "@nextui-org/react";
import { Group2 } from './src/components/Group2';
import { NewGoodHabit } from './src/components/NewGoodHabit';
import { PhoneNum, ProceedButton } from './src/components/PhoneNum';

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className='container flex flex-col items-center justify-center'>
            {/* <ProductSlider/>
            <Discount/>
            <Group2/>               */}
            {/* <NewGoodHabit/> */}
        </div>
        <PhoneNum/>
    </main>
    </NextUIProvider>
  )
}
