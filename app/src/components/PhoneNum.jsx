import React, { useState } from "react";
import Image from 'next/image'
import { Modal, ModalContent, ModalHeader, ModalBody,  useDisclosure,Checkbox, Input, Button } from "@nextui-org/react";
import { NewGoodHabit } from "./NewGoodHabit";
import { RedeemNow } from "./RedeemNow";

// import { NewGoodHabit } from "./NewGoodHabit";

export const PhoneNum = () => {

    const[proceed, setProceed] = useState(true);
    const setProceedScreen = () =>{
        setProceed(false);
    }
    


    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const [modalPlacement, setModalPlacement] = React.useState("auto");
    return (
        <div className="flex flex-col justify-center items-start">
            {/* <Image
                width={400}
                height={400}
                src="/Base-1.png"
                alt="base"
            /> */}
            {/* <div className="h-[30vh] bg-white "> */}
                <div className="flex flex-col pt-5">
                    <div className="flex pl-2 text-xs/6">
                    <span className="flex text-xs/6 text-slate-500 font-avenir font-semibold  tracking-widest ">Enter your Mobile number</span>
                    </div>
                    <div className="flex flex-col" >
                        <Input
                            size="lg"
                            type="number"
                            // labelPlacement="outside"
                            placeholder="+91"
                            defaultValue="+91"
                            color="gray"
                            variant = "bordered"
                        />
                    </div>
                    <div className="flex flex-row content-start px-4 pt-1">
                        <div className="pt-1"><Checkbox defaultSelected ></Checkbox></div>
                        <div className="pt-1"><span className="text-gray-400">I agree to the <span style={{ color: "#4B76C3" }}> Terms of Service </span><span>and</span><span style={{ color: "#4B76C3" }}> Privacy Policy</span></span></div>
                    </div>
                    <div className="flex justify-center items-center py-5">
                        <Button onPress={onOpen} onClick={setProceedScreen} className="h-[61px] w-[340px] text-xl rounded-3xl bg-gradient-to-l from-violet-500 to-blue-700 text-white font-bold pad-shadow">
                            Proceed
                        </Button>
                        <Modal
                            isOpen={isOpen}
                            placement="bottom"
                            onOpenChange={onOpenChange}
                        >
                            <ModalContent>
                                {(onClose) => (

                                    <>
                                  
                                        <ModalBody>
                                            <RedeemNow/>
                                        </ModalBody>

                                        

                                    </>
                                )} 
                            </ModalContent>
                        </Modal>

                    </div>
                </div >
            {/* </div> */}
        </div>
    );
};


