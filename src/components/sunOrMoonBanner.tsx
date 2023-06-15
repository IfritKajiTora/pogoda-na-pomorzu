
import React from 'react'
import Image from 'next/image';


export default function SunOrMoonBanner({currentHour}: {currentHour: number | null}) {
  return (
    <>
    <div className='weatherIconsDiv'>
      {currentHour == null ? null :
        (currentHour > 20 || currentHour < 4) ?
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
    </>
  )
}
