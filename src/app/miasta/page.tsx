'use client'

import React, {useState, useEffect} from 'react'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz';
import Image from 'next/image';
import backgroundNightOpacity from '@/functions/backgroundNightOpacity'
import BackLink from '@/components/backLink'
import SortingCities from '@/components/sortingCities';
import '@/styles/miasta.css'

export default function Miasta() {
  const currentDate = new Date();
  const polandtimeZone = 'Europe/Warsaw';

  const [currentHour, updateCurrentHour] = useState<number | null>(21);
  const [nightBackgroundOpacity, updateBacgkroundNightOpacity] = useState<number>(0.5);

  useEffect(() => { updateCurrentHour(Number(format(utcToZonedTime(currentDate, polandtimeZone), 'HH', { locale: pl }))); },[]);
  useEffect(() => { updateBacgkroundNightOpacity(backgroundNightOpacity(currentHour)); },[currentHour]);


  return (
    <>
      <section className='MainPage_Banner'>
        <div className='MainPage_banner_night' style={{opacity: nightBackgroundOpacity}}></div>
        <div className="container m-auto py-[50px] relative">

          <BackLink/>

          <div className='weatherIconsDiv'>
            {currentHour == null ? null :
              (currentHour > 21 || currentHour < 4) ?
                <>
                <div className='moonRadialGradient'></div>
                <Image priority src='/weather-icons/moon.png' height={500} width={500} alt='Ikona pogody - Księżyc' className='weatherIcon weatherIcon-moon' />
                <div className="cloudMoving">
                  <Image src='/weather-icons/cloudy.png' height={540} width={540} alt='cloud icon - weather cloudy' className='weatherIcon weatherIcon-cloud' />
                </div>
              </>
              : <>            
                <div className='sunnyRadialGradient'></div>
                <Image priority src='/weather-icons/sunny.png' height={540} width={540} alt='sun icon - weather sunny' className='weatherIcon weatherIcon-sunny' />
                <div className="cloudMoving">
                  <Image src='/weather-icons/cloudy.png' height={540} width={540} alt='cloud icon - weather cloudy' className='weatherIcon weatherIcon-cloud' />
                </div>
              </>
            }

          </div>

          <h1 className='Banner_title text-center mb-20'>LISTA MIAST NA POMORZU</h1>

          <SortingCities/>

        </div>
      </section>
    </>
  )
}
