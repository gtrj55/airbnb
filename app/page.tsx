"use client"
import { Banner, Footer, Header, LargeCard, MediumCard, SmallCard } from '@/Components'
import Image from 'next/image'
import cardData, { cardMiddleData } from "./DummyData/SmallCardData"
import {LARGE_CARD,ILargeCard} from './Constant/LargeImageContants'

export interface abc{
  title:string,
  id:string
}

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main className='max-w-7xl m-auto px-8'>
        <section className='pt-6'>
          <h2 className='text-3xl font-semibold m-2'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {cardData.map((item, index) => (
              <SmallCard key={index} data={item} />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3'>
            {cardMiddleData.map((cardData, index) => (
              <MediumCard key={index} cardData={cardData} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            largeCardAttr={LARGE_CARD}
          />
        </section>
      </main>
      <Footer/>
    </>
  )
}


