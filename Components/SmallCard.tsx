import React from 'react'
import Image from 'next/image'

const SmallCard = ({ data: { img, location, distance } }: any) => {
    return (
        <div className='flex items-center m-2 mt-2 lg:mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-300 hover:scale-105 transition transform duration-200 ease-in-out'>
            <div className='relative h-16 w-16'>
                <Image src={img} alt="my image" layout='fill'
                className='rounded-lg'
                />
            </div>
            <div>
                <h2>{location}</h2>
                <p className='text-gray-500'>{distance}</p>
            </div>
        </div>
    )
}

export default SmallCard