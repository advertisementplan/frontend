import React from 'react'
import {Tabs, Tab, Button} from "@nextui-org/react"; 

import {Card, CardHeader, CardBody} from "@nextui-org/react";

export const Group2 = () => {
    const variants = [
        "underlined",
      ];
    
      return (
        <div className="flex flex-wrap gap p-[21px]">
            <Card className="py-4 rounded-[30px] h-[53.5vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-between">
                    {variants.map((variant) => (
                        <Tabs fullWidth key={variant} variant={variant} aria-label="Tabs variants" className="text-white">
                            <Tab key="Details" title="Detail"/>
                            <Tab key="Howtoredeem" title="How To Redeem"/>
                        </Tabs>
                    ))}
                </CardHeader>
                <CardBody className="w-screen pl-12 pr-10">
                    <ul className='list-disc p-4 text-[14px] font-[500] leading-normal'>
                        <li className='mb-[19.12px]'>
                            Flat 50% OFF Exclusively For Times Prime Members    
                        </li>
                        <li className='mb-[19.12px]'>
                            Eye Health Gummies - Look after your eyes the tasty way 
                        </li>
                        <li className='mb-[19.12px]'>
                        Applicable on 30, 60 and 90 Days Pack     
                        </li>
                        <li className='mb-[19.12px]'>
                            Free shipping across India across India
                        </li>
                        <li className='mb-[19.12px]'>
                            Eye Health Gummies - Look after your eyes the tasty way
                        </li>
                    </ul>
                </CardBody>
                <Card className="py-4 rounded-[30px] h-[10vh]">
                    <Button color="primary">
                        Button
                    </Button>
                </Card>
            </Card>
        </div>
    )
}
