import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[600px] '>
            <Image src="https://links.papareact.com/0fm" alt="something"
                layout='fill'
                objectFit='cover'

            />
            <div className='absolute top-1/2 w-full text-center '>
                <p className='text-sm sm:text-lg'>Not sure where to go? Perfect</p>
                <button className='bg-white py-4 px-10 shadow-md mt-3 font-bold rounded-full text-purple-500 hover:shadow-xl active:scale-90 transition duration-150 ease-in-out'>I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner