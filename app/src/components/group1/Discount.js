import React from 'react'
import Image from 'next/image'

export const Discount = () => {
  return (
    <div className='flex flex-row justify-between w-[300px] gap-4'>
       <div className='flex w-15'>
            <Image
                width={60}
                height={60}
                src="/offerslogo1.svg"
            >
            </Image>
       </div>
       <div className='flex justify-center items-center'>
            <span className='text-white'>
                Flat 50% OFF On Eye Health Gumminies
            </span>
       </div>
    </div>
  )
}
