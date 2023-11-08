"use client"
import {NextUIProvider} from "@nextui-org/react";
import { Group2 } from './src/components/Group2';
// import { NewGoodHabit } from './src/components/NewGoodHabit';
// import { PhoneNum, ProceedButton } from './src/components/PhoneNum';
import {RedeemNow} from './src/components/RedeemNow';
import { PhoneNum } from "./src/components/PhoneNum";
export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Group2/>
        {/* <NewGoodHabit /> */}
        {/* <PhoneNum/> */}
        {/* <RedeemNow/> */}
    </main>
    </NextUIProvider>
  )
}
