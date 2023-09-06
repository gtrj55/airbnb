import React from 'react'
import Image from 'next/image'
import { ILargeCard } from '@/app/Constant/LargeImageContants'

const LargeCard = ({ largeCardAttr }: { largeCardAttr: ILargeCard }) => {
    return (
        <>
        <section className='relative py-16 cursor-pointer'>

        <div className='relative h-96 min-w-[300px]'>
            <Image src={largeCardAttr.LARGE_CARD_IMAGE_URL} alt="kjlkj" layout='fill' objectFit='cover' className='rounded-lg'/>
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-3xl mb-3 w-64'>{largeCardAttr.LARGE_CARD_TITLE}</h3>
            <p>{largeCardAttr.LARGE_CARD_DESCRIPTION}</p>
            <button className='bg-gray-900 text-white rounded-lg py-2 px-4 mt-5 text-sm'>{largeCardAttr.LARGE_CARD_BUTTONTEXT}</button>
        </div>
        </section>
        </>
    )
}

export default LargeCard


// <div className='relative h-96 min-w-[300px]'>
//         <Image src={largeCardAttr.LARGE_CARD_IMAGE_URL} alt="kjlkj" layout='fill' objectFit='cover' />
//     </div>