import React from "react";
import Image from 'next/image'
import { Snippet,Button } from "@nextui-org/react";
import { CheckIcon } from "./CheckIcon";
import { CopyIcon } from "./CopyIcon";

export const RedeemNow = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <Image
                width={400}
                height={400}
                src="/Base-1.png"
                alt="base"
                className="w-screen h-34"
            /> */}
            {/* <div className="h-[30vh] w-screen bg-white "> */}
                <div className="flex flex-col justify-center items-center pt-5 ">
                    <div className='font-extrabold text-center text-base'>
                        Congratulations !!
                    </div>
                    <div className="flex  justify-center items-center pt-2 px-6 pb-3 ">
                        <span className="text-xs text-center text-gray-400">You are eligible to redeem the coupon now, you can click proceed to view the coupon code and redeem the offer</span>
                    </div>
                    <div className="flex flex-col  h-[68px] w-[348px]  px-6 " >
                        <span className="flex text-xs/6 text-slate-500 font-avenir font-semibold  tracking-widest ">MY COUPON CODE</span>
                        <Snippet
                            variant="bordered"
                            symbol=""
                            copyIcon={<CopyIcon />}
                            checkIcon={<CheckIcon />}
                        >
                            <span className="font-bold text-xl tracking-[10px] ">GET20-OFF</span>
                        </Snippet>

                    </div>
                    <div className="flex  pt-10">
                        <Button className="flex w-[340px] h-[61px] text-xl rounded-3xl bg-gradient-to-l from-violet-500 to-blue-700 text-white font-bold pad-shadow lg:w-[340px] ">
                            Redeem Now
                        </Button>
                    </div>
                </div >
            {/* </div> */}
        </div>
    );
};


