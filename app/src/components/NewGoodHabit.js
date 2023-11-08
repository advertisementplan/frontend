// import React from 'react'
// import Image from 'next/image'
// import { Button } from "@nextui-org/react";
// import { Card, CardBody, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, } from "@nextui-org/react";
// import { RedeemNow } from './RedeemNow';

// export const NewGoodHabit = () => {

//     const { isOpen, onOpen, onOpenChange } = useDisclosure();
//     const [modalPlacement, setModalPlacement] = React.useState("auto");


//     return (
//         <div className='flex flex-col justify-center items-center pt-10'>
//             {/* <Card className="py-3 rounded-[30px] h-[53.5vh]"> */}
//                 {/* <CardBody className="w-[350px] h-[500px] pl-12 pr-10 overflow-hidden"> */}
//                     <div className='flex flex-col justify-center items-center'>
//                         <div className="w-40 h-40 rounded-full flex justify-center items-center border-2 border-violet-500 bg-violet-100">
//                             <div className="w-20 h-20 rounded-full bg-gradient-to-l from-violet-500 to-blue-700 flex justify-center items-center">
//                                 <div className='flex justify-center items-center'>
//                                     <Image
//                                         width={40}
//                                         height={40}
//                                         src="/tick.png"
//                                         alt="img1"
//                                     >
//                                     </Image>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='flex flex-col justify-center items-center'>
//                             <div className='pt-6 py-2 font-bold text-2xl text-gray-800'>
//                                 Congratulations !!
//                             </div>
//                             <div className='flex justify-center items-center text-sm px-5 text-slate-500 h-[66px] w-[280px]'>
//                                 You're eligible to redeem the coupon now, you can click proceed to view the coupon code and redeem the offer.
//                             </div>
//                         </div>
//                     </div>
//                     <div className='flex justify-center items-center py-9'>
//                         <Button onPress={onOpen} className="h-[61px] w-[270px] text-[18px] rounded-3xl bg-gradient-to-l from-violet-500 to-blue-700 text-white font-bold pad-shadow">
//                             Show Coupon Code
//                         </Button>  
//                         <Modal
//                             isOpen={isOpen}
//                             placement="bottom"
//                             onOpenChange={onOpenChange}
//                         >
//                             <ModalContent>
//                                 {(onClose) => (
//                                     <>
                                        
//                                         {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
//                                         <ModalBody>
//                                             <RedeemNow/>
//                                         </ModalBody>
//                                     </>
//                                 )}
//                             </ModalContent>
//                         </Modal>   
//                     </div>
//                 {/* </CardBody> */}
//             {/* </Card> */}
//         </div>
//     )
// }
