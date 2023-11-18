import React from 'react'
import Image from 'next/image'


export const ProductSlider = () => {
  return (
    <div className='w-[300px] pt-6'>
        <Image
            width={298}
            height={298}
            src="/product.png"
            alt="img"
        >
        </Image>
    </div>
  )
}
