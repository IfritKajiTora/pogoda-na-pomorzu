import React from 'react'
import Image from 'next/image';
import WeatherTableInfo from '@/types/weatherTable'

export default function WeatherTable(props: WeatherTableInfo) {
  return (
    <>
    <table className='weatherTable mx-auto text-left lg:ml-0'>
      <tbody>
        <tr>
          <td><Image className='weatherTableIcon' src='/weather-icons/cloudy.png' width={30} height={30} alt='cloud icon'/></td>
          <td>Zachmurzenie:</td>
          <td>{props.cloudCover == 0 ? 'Czyste Niebo' : `${props.cloudCover}${props.cloudCoverUnits}`}</td>
        </tr>


        <tr>
          <td><Image className='weatherTableIcon' src='/weather-icons/water.png' width={30} height={30} alt='water icon'/></td>
          <td>Wilgotność:</td>
          <td>{props.relativeHumidity}{props.relativeHumidityUnits}</td>
        </tr>

        <tr>
          <td><Image className='weatherTableIcon' src='/weather-icons/rain.png' width={30} height={30} alt='rain icon'/></td>
          <td>Deszcz: </td>
          <td>{props.rain == 0 ? 'Brak' : `${props.rain} ${props.rainUnits}`}</td>
        </tr>

        <tr>
          <td><Image className='weatherTableIcon' src='/weather-icons/snow.png' width={30} height={30} alt='snow icon'/></td>
          <td>Opady śniegu:</td>
          <td>{props.snowfall == 0 ? 'Brak' : `${props.snowfall} ${props.snowfallUnits}`}</td>
        </tr>

                  
        <tr>
          <td><Image className='weatherTableIcon' src='/weather-icons/wind.svg' width={30} height={30} alt='wind icon'/></td>
          <td>Kierunek wiatru:</td>
            <td>
              <Image style={{rotate: `${props.winddirection}deg`}} className='NESW-arrow' 
                src='/arrow-wind-small.png' alt='strzałka wskazująca kierunek wiatru' width={30} height={30}
              />
            {props.winddirection}{props.winddirectionUnits}
          </td>
        </tr>

        <tr>
          <td><Image className='weatherTableIcon' src='/weather-icons/windSpeed.png' width={30} height={30} alt='wind speed icon'/></td>
          <td>Prędkość wiatru:</td>
          <td>{props.windspeed} {props.windspeedUnits}</td>
        </tr>

      </tbody>
    </table>
    </>
  )
}
