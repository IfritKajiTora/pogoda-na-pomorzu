'use client'

import React, {useState, useEffect} from 'react'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz';
import SunOrMoonBanner from '@/components/sunOrMoonBanner'
import backgroundNightOpacity from '@/functions/backgroundNightOpacity'
import BackLink from '@/components/backLink'
import SortingCities from '@/components/sortingCities';
import '@/styles/miasta.css'

export default function Miasta() {
  const currentDate = new Date();
  const polandtimeZone = 'Europe/Warsaw';

  const [currentHour, updateCurrentHour] = useState<number | null>(null);
  const [nightBackgroundOpacity, updateBacgkroundNightOpacity] = useState<number>(0.5);

  useEffect(() => { updateCurrentHour(Number(format(utcToZonedTime(currentDate, polandtimeZone), 'HH', { locale: pl }))); },[]);
  useEffect(() => { updateBacgkroundNightOpacity(backgroundNightOpacity(currentHour)); },[currentHour]);


  return (
    <>
      <section className='MainPage_Banner'>
        <div className='MainPage_banner_night' style={{opacity: nightBackgroundOpacity}}></div>
        <div className="container m-auto py-[50px] relative">

          <BackLink/>
          <SunOrMoonBanner currentHour={currentHour}/>
          <h1 className='Banner_title text-center mb-20'>LISTA MIAST NA POMORZU</h1>
          <SortingCities/>

        </div>
      </section>
    </>
  )
}
