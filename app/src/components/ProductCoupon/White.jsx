import React from 'react'
import { Tabs, Tab, user } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardHeader, CardBody } from "@nextui-org/react";
import { PhoneNum } from '../PhoneNum';


export const White = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");

    return (
        <div className="flex flex-col pt-5  lg:pt-10">
            <Card className="flex py-4 rounded-[30px] h-[53.5vh] ">
                <CardHeader className="flex pb-0 pt-2 px-4 flex-col items-between ">
                    {/* {variants.map((variant) => ( */}
                    <Tabs fullWidth variant="underlined" aria-label="Tabs variants" className="flex text-white">
                        <Tab key="Details" title="Detail" />
                        <Tab key="Howtoredeem" title="How To Redeem" />
                    </Tabs>
                    {/* // ))} */}
                </CardHeader>
                <CardBody className="flex  w-screen pl-12 pr-10">
                    <ul className='list-disc p-4 text-[14px] font-[500] leading-normal'>
                        <li className='mb-[19.12px]'>
                            Flat
                            <strong> 50% OFF </strong>
                            Exclusively For Times Prime Members
                        </li>
                        <li className='mb-[19.12px]'>
                            Eye Health Gummies - Look after your eyes the tasty way
                        </li>
                        <li className='mb-[19.12px]'>
                            Applicable on
                            <strong> 30, 60 and 90 </strong> Days Pack
                        </li>
                        <li className='mb-[19.12px]'>
                            Free shipping
                            <strong> across India</strong>
                        </li>
                        <li className='mb-[19.12px]'>
                            Eye Health Gummies - Look after your eyes the tasty way
                        </li>
                    </ul>
                    {/* <Card className="lg:w-80 pad-shadow"> */}
                    <div className='flex flex-col justify-center items-center  '>
                        <Button onPress={onOpen} className="flex h-[61px] w-[340px] text-xl rounded-3xl bg-gradient-to-l from-violet-500 to-blue-700 text-white font-bold pad-shadow lg:h-[60px] ">
                            Generate Code
                        </Button>
                    </div>

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
                    {/* </Card> */}
                </CardBody>
            </Card>
        </div>
    )
}
