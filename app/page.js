"use client"
import {NextUIProvider} from "@nextui-org/react";
import { ProductCoupon } from './src/components/ProductCoupon';


export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex h-screen flex-col items-center justify-between">
        <ProductCoupon/>
      </main>
    </NextUIProvider>
  )
}
