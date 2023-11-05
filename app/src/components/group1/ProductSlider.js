import React from 'react'
import Image from 'next/image'


export const ProductSlider = () => {
  return (
    <div className='w-[300px] '>
        <Image
            width={298}
            height={298}
            src="/product.png"
        >
        </Image>
    </div>
  )
}
