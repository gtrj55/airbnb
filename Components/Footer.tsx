import React from 'react'
import FooterData from '@/app/DummyData/FooterData'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 px-32 py-14 bg-gray-100 gap-y-10 text-gray-600'>
       {FooterData.map((item,index)=>(
        <div key={index} className='space-y-4 text-sm text-gray-800'>
          <h3 className='font-bold'>{item.title}</h3>
          <ul>
            {item.links.map((link,index)=>(
              <li key={index}>{link.name}</li>
            ))}
          </ul>
        </div>
       ))}
    </div>
  )
}

export default Footer