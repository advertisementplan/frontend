import React from 'react'
import Image from 'next/image'
import {Button} from "@nextui-org/react"; 
import {Card, CardBody} from "@nextui-org/react";

export const NewGoodHabit = () => {

    return (
        <div className='pt-[191px]'>
            <Card className="py-3 rounded-[30px] h-[53.5vh]">
                    <CardBody className="w-[350px] h-[500px] pl-12 pr-10 overflow-hidden">
                        <div className='flex flex-col justify-center items-center'>
                            <div className="w-40 h-40 rounded-full flex justify-center items-center border-2 border-violet-500 bg-violet-100">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-l from-violet-500 to-blue-700 flex justify-center items-center">
                                    <div className='flex justify-center items-center'>
                                        <Image
                                            width={40}
                                            height={40}
                                            src="/tick.png"
                                            alt="img1"
                                        >
                                        </Image>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='pt-6 font-extrabold'>
                                    Congratulations !!
                                </div>
                                <div className='flex justify-center items-center text-center pt-5 text-sm'>
                                    You're eligible to redeem the coupon now, you can click proceed to view the coupon code and redeem the offer.
                                </div>
                            </div>
                        </div>
                        <div className='pt-9 flex justify-center items-center'>
                            <Button className="h-[61px] w-[291px] text-[18px] rounded-3xl bg-gradient-to-l from-violet-500 to-blue-700 text-white font-bold pad-shadow">
                                Show Coupon Code
                            </Button>
                        </div>
                    </CardBody>
                </Card>
        </div>
    )
}
