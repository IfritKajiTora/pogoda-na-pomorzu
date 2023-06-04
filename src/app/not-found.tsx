import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '404 Brak pogody na tej stronie',
}

export default function NotFound() {

  return (
    <>
    <section className='MainPage_Banner'>
      <div className='MainPage_banner_night' style={{opacity: '0.5'}}></div>

      <div className="container m-auto py-[50px] relative">
        <Link className='backLink' href='/'>
          <Image src='/arrow-wind.png' width={40} height={40} alt='arrow back to main page'/>
          Powrót
        </Link>

        <div className='relative z-10 lg:grid lg:grid-cols-5 gap-4'>

          <div className='lg:col-span-2 order-1 lg:order-2 self-center'>
            <div className='weatherIconsDiv'>
              <div className='moonRadialGradient'></div>
              <Image src='/weather-icons/unknown.png' height={500} width={500} alt='Ikona pogody - Nieznana' className='weatherIcon weatherIcon-moon' />
            </div>
          </div>

          <div className='lg:col-span-3 relative z-50 order-2 lg:order-1 text-center lg:text-left pt-[30px] lg:pt-0 self-center'>
            <h1 className="text-7xl md:text-8xl lg:text-9xl">404</h1>
            <p className='Banner_title'>Brak Pogody na tej stronie.</p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
