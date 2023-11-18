import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Checkbox, Input, Button } from "@nextui-org/react";
import { RedeemNow } from "./RedeemNow";

export const PhoneNum = () => {
    
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [check, setChecked] = useState(true);
    const [phoneNum, setPhoneNum] = useState("");
    const setCheckedhandler = () => {
        setChecked(!check);
    }
    const handleSubmit = () => {
        if (!check) {
            alert("Please read and agree to terms of service");
        }
        if (check && phoneNum !== "" && phoneNum.trim().length === 10) {
            onOpen();
        }
        if(phoneNum.trim().length !== 10 && phoneNum !== "") alert("Please provide valid number"); 
        if(phoneNum === "") alert("Please provide phone number"); 
    }
   
    return (
        <div className="flex flex-col justify-center items-start">
            <div className="flex flex-col pt-5">
                <div className="flex pl-2 text-xs/6">
                    <span className="flex text-xs/6 text-slate-500 font-avenir font-semibold  tracking-widest ">Enter your Mobile number</span>
                </div>
                <div className="flex flex-col" >
                    <Input
                        size="lg"
                        type="number"
                        placeholder="+91"
                        defaultValue={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                        color="gray"
                        variant="bordered"
                        isRequired
                    />
                </div>
                <div className="flex flex-row content-start px-4 pt-1">
                    <div className="pt-1"><Checkbox defaultSelected={check} onChange={setCheckedhandler}></Checkbox></div>
                    <div className="pt-1"><span className="text-gray-400">I agree to the <span style={{ color: "#4B76C3" }}> Terms of Service </span><span>and</span><span style={{ color: "#4B76C3" }}> Privacy Policy</span></span></div>
                </div>
                <div className="flex justify-center items-center py-5">
                    <Button onClick={handleSubmit} className="h-[61px] w-[340px] text-xl rounded-3xl bg-gradient-to-l from-violet-500 to-blue-700 text-white font-bold pad-shadow">
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
                                        <RedeemNow />
                                    </ModalBody>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
            </div >
        </div>
    );
};


