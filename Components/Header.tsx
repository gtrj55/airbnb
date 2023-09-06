import React from 'react'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiSolidUserCircle } from 'react-icons/bi'
// import {GiHamburgerMenu} from 'react-icons/gi'
const Header = () => {
    return (
        <header className='grid grid-cols-3 bg-white sticky top-0 shadow-md p-5 lg:p-3 z-10'>
            <div className='relative flex items-center h-10 cursor-pointer'>
                <Image
                    src="https://links.papareact.com/qd3"
                    alt='Test'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input className='bg-transparent outline-none flex-grow pl-5 text-gray-400' type='text' placeholder="start your search" />
                <AiOutlineSearch className='bg-red-400 rounded-full p-1 text-white h-8 cursor-pointer text-3xl hidden md:inline-flex md:mx-2' />
            </div>
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline'>Become a host</p>
                <BsGlobe className='h-6 text-2xl' />
                <div className='flex items-center space-x-2 border-2 rounded-full p-2'>
                    <GiHamburgerMenu className='h-6 text-2xl' />
                    <BiSolidUserCircle className='h-6 text-2xl'/>
                </div>
            </div>
        </header>
    )
}

export default Header