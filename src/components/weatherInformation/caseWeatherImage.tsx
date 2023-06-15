import React from 'react'
import Image from 'next/image'

type CaseWeatherImage = {
  cloudCover: number
  rain:number
  weatherCode: number
  snow:number
  sunrise: Date
  sunset: Date
  todayHours: number
  smallerImages?: boolean
}

export default function CaseWeatherImage(props: CaseWeatherImage) {
  const hourSunrise = props.sunrise.toString().split('T')[1].split(':')[0];
  const hourSunriseToNumber = parseInt(hourSunrise, 10);
  const hourSunset = props.sunset.toString().split('T')[1].split(':')[0];
  const hourSunsetToNumber = parseInt(hourSunset, 10);

  return (
    <>
      {props.todayHours < hourSunriseToNumber || props.todayHours >= hourSunsetToNumber
      ? <>
        <div className='moonRadialGradient'></div>
        <Image priority src='/weather-icons/moon.png' 
          height={props.smallerImages ? 152 : 500} 
          width={props.smallerImages ? 152 : 500} 
          alt='Ikona pogody - Księżyc' 
          className='weatherIcon weatherIcon-moon' 
        />
      </>
      : <>
        <div className='sunnyRadialGradient'></div>
        <Image priority src='/weather-icons/sunny.png' 
          height={props.smallerImages ? 189 : 540} 
          width={props.smallerImages ? 189 : 540} 
          alt='Ikona pogody - słonecznie' 
          className='weatherIcon weatherIcon-sunny' 
        />
      </>
      }


      {props.cloudCover >= 70
      ? <>
        <Image src='/weather-icons/cloudy.png' 
          height={props.smallerImages ? 189 : 540} 
          width={props.smallerImages ? 189 : 540} 
          alt='Ikona pogody - pochmurnie dodatkowa chmura' 
          className='weatherIcon weatherIcon-cloud-second' 
        />
        <div className="cloudMoving">
          <Image src='/weather-icons/cloudy.png' 
            height={props.smallerImages ? 189 : 540} 
            width={props.smallerImages ? 189 : 540} 
            alt='Ikona pogody - pochmurnie' 
            className='weatherIcon weatherIcon-cloud' 
          />
        </div>
      </>
      : props.cloudCover >= 50
      ? <>
        <div className="cloudMoving">
          <Image src='/weather-icons/cloudy.png' 
            height={props.smallerImages ? 189 : 540} 
            width={props.smallerImages ? 189 : 540} 
            alt='Ikona pogody - pochmurnie' 
            className='weatherIcon weatherIcon-cloud' 
          />
        </div>
      </>
      : props.cloudCover >= 30
      ? <>
      <div className="cloudMoving">
        <Image src='/weather-icons/cloudy.png' 
          height={props.smallerImages ? 189 : 540} 
          width={props.smallerImages ? 189 : 540} 
          alt='Ikona pogody - mało pochmurnie' 
          className='weatherIcon weatherIcon-cloud-small' 
        />
      </div>
      </>
      : props.cloudCover >= 10
      ? <>
        <Image src='/weather-icons/cloudy.png' 
          height={props.smallerImages ? 189 : 540} 
          width={props.smallerImages ? 189 : 540} 
          alt='Ikona pogody - pochmurnie dodatkowa chmura' 
          className='weatherIcon weatherIcon-cloud-second' 
        />
      </> 
      :null}


      {props.rain >= 7.5
      ? <>
        <div className="cloudMoving">
          <Image src='/weather-icons/rain.png' 
            height={props.smallerImages ? 189 : 540} 
            width={props.smallerImages ? 189 : 540} 
            alt='Ikona pogody - mocny deszcz' 
            className='weatherIcon weatherIcon-rain'
          />
        </div>
      </>
      : props.rain >= 2.5
      ? <>
        <div className="cloudMoving">
          <Image src='/weather-icons/rain.png' 
            height={props.smallerImages ? 189 : 540} 
            width={props.smallerImages ? 189 : 540} 
            alt='Ikona pogody - średni deszcz' 
            className='weatherIcon weatherIcon-rain-medium'
          />
        </div>
      </>
      : props.rain >= 0.1
      ? <>
      <div className="cloudMoving">
        <Image src='/weather-icons/rain.png' 
          height={props.smallerImages ? 189 : 540} 
          width={props.smallerImages ? 189 : 540} 
          alt='Ikona pogody - lekki deszcz' 
          className='weatherIcon weatherIcon-rain-small'
        />
      </div>
      </>
      : null}


      {props.snow >= 7.5
      ? <>
        <div className="cloudMoving">
          <Image src='/weather-icons/snow.png' 
            height={props.smallerImages ? 189 : 540} 
            width={props.smallerImages ? 189 : 540} 
            alt='Ikona pogody - silny opad śniegu' 
            className='weatherIcon weatherIcon-snow-fall'
          />
        </div>
      </>
      : props.snow >= 5
      ? <>
        <div className="cloudMoving">
          <Image src='/weather-icons/snow-small.png' 
            height={props.smallerImages ? 189 : 540} 
            width={props.smallerImages ? 189 : 540} 
            alt='Ikona pogody - średni opad śniegu' 
            className='weatherIcon weatherIcon-snow-medium' 
          />
        </div>
      </>
      : props.snow >= 0.1
      ? <>
      <div className="cloudMoving">
        <Image src='/weather-icons/snow-small.png' 
          height={props.smallerImages ? 189 : 540} 
          width={props.smallerImages ? 189 : 540} 
          alt='Ikona pogody - mała marznąca mżawka' 
          className='weatherIcon weatherIcon-snow-small' 
        />
      </div>
      </>
      : null}


      {(() => {
        switch (props.weatherCode) {
          case 45:
          case 48: return(
            <>
            <div className="cloudMoving">
              <Image src='/weather-icons/cloudy.png' 
                height={props.smallerImages ? 189 : 540} 
                width={props.smallerImages ? 189 : 540} 
                alt='Ikona pogody - pochmurnie' 
                className='weatherIcon weatherIcon-fog' 
              />
            </div>
            </>
          )
          case 95: return(
          <>
          <div className="cloudMoving">
            <Image src='/weather-icons/storm.png' 
              height={props.smallerImages ? 189 : 540} 
              width={props.smallerImages ? 189 : 540} 
              alt='Ikona pogody - słaba burza' 
              className='weatherIcon weatherIcon-storm-small' 
            />
          </div>
          </>
        )
          case 96: return(
            <>
            <div className="cloudMoving">
              <Image src='/weather-icons/storm.png' 
                height={props.smallerImages ? 189 : 540} 
                width={props.smallerImages ? 189 : 540} 
                alt='Ikona pogody - średnia burza' 
                className='weatherIcon weatherIcon-storm-medium' 
              />
            </div>
            </>
          )
          case 99: return(
            <>
            <div className="cloudMoving">
              <Image src='/weather-icons/storm.png' 
                height={props.smallerImages ? 189 : 540} 
                width={props.smallerImages ? 189 : 540} 
                alt='Ikona pogody - średnia burza' className='weatherIcon weatherIcon-storm' 
              />
            </div>
            </>
          )
          default: return null;
        }
      })()}
    </>
  )
}
