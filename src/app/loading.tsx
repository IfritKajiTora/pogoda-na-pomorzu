import React from 'react'
import { Metadata } from 'next'
import backgroundNightOpacity from '@/functions/backgroundNightOpacity'
import Link from 'next/link'
import Image from 'next/image'


export const metadata: Metadata = {
    title: 'Pobieranie pogody',
}

export default function loading() {
  const currentHour = new Date().getHours();
  const nightBackgroundOpacity = backgroundNightOpacity(currentHour);
  
  return (
    <>
    <section className='MainPage_Banner'>
      <div className='MainPage_banner_night' style={{opacity: `${nightBackgroundOpacity}`}}></div>

      <div className="container m-auto py-[50px] relative">
        <Link className='backLink' href='/'>
          <Image src='/arrow-wind.png' width={40} height={40} alt='arrow back to main page'/>
          Powrót
        </Link>

        <div className='relative z-10 lg:grid lg:grid-cols-5 gap-4'>

          <div className='lg:col-span-2 order-1 lg:order-2 self-center'>
            <div className='weatherIconsDiv'>
              <div className='moonRadialGradient'></div>
              <Image priority src='/weather-icons/unknown.png' height={500} width={500} alt='Ikona pogody - Nieznana' className='weatherIcon weatherIcon-moon' />
            </div>
          </div>

          <div className='lg:col-span-3 relative z-50 order-2 lg:order-1 text-center lg:text-left pt-[30px] lg:pt-0 self-center'>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 font-semi-bold">Pobieranie danych</h1>
            <p className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl'>Poczekaj chwilę, trwa generowanie strony na podstawie nowych danych</p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
