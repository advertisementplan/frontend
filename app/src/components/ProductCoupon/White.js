import React from 'react'
import { Tabs, Tab, user } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardHeader, CardBody } from "@nextui-org/react";

import { PhoneNum } from '../PhoneNum';


export const White = () => {

    const variants = ["underlined"];
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");

    return (
        <div className="flex flex-col pt-5 overflow-hidden lg:pt-10">
            <Card className="py-4 rounded-[30px] h-[53.5vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-between">
                    {variants.map((variant) => (
                        <Tabs fullWidth key={variant} variant={variant} aria-label="Tabs variants" className="text-white">
                            <Tab key="Details" title="Detail" />
                            <Tab key="Howtoredeem" title="How To Redeem" />
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
                    <Card radius="lg" className="rounded-[30px]">
                        <Button onPress={onOpen} value="bottom" className="h-[61px] text-[18px] bg-gradient-to-l from-violet-500 to-blue-700 text-white font-bold ">
                            Generate Code
                        </Button>
                        <Modal
                            isOpen={isOpen}
                            className="display-none"
                            placement={modalPlacement}
                            onOpenChange={onOpenChange}
                        >
                            <ModalContent>  
                                {(onClose) => (
                                    <div className='overscroll-none'>
                                        <ModalBody>
                                            <PhoneNum />
                                        </ModalBody>
                                        
                                    </div>
                                    
                                )}
                            </ModalContent>
                        </Modal>
                    </Card>
                </CardBody>
            </Card>
        </div>
    )
}
