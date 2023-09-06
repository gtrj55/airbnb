import React from 'react'
import Image from 'next/image'

const MediumCard = ({ cardData: { img, title } }: any) => {
    console.log(img)
    return (
        <div className='hover:scale-105 cursor-pointer transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image src={img} alt={title} layout='fill' className='rounded-lg' />
            </div>
            <div>
                <h1 className='text-2xl font-semibold mt-3 text-gray-600'>{title}</h1>
            </div>
        </div>
    )
}

export default MediumCard