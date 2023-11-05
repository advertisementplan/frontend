"use client"
import { ProductSlider } from './src/components/group1/ProductSlider'
import { Discount } from './src/components/group1/Discount'
import {NextUIProvider} from "@nextui-org/react";
import { Group2 } from './src/components/Group2';

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-[25px]">
        <div className='container flex flex-col items-center justify-center'>
            <ProductSlider/>
            <Discount/>
            <Group2/>
        </div>
    </main>
    </NextUIProvider>
  )
}
