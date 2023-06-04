import React from 'react'
import typesWeather from '@/types/weather'
import CaseWeatherName from '@/components/weatherInformation/caseWeatherName';
import CaseWeatherImage from '@/components/weatherInformation/caseWeatherImage';
import WeatherInfoTable from '@/components/weatherInformation/weatherInfoTable';
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz';

export default function WeatherBanner({fetchedCityData, cityName}: {fetchedCityData: typesWeather, cityName: string}) {
  const currentDate = new Date();
  const timeZone = 'Europe/Warsaw';
  const dayNumber = Number(format(utcToZonedTime(currentDate, timeZone), 'dd', { locale: pl }));
  const hourNow = Number(format(utcToZonedTime(currentDate, timeZone), 'HH', { locale: pl }));
  const minutesNow = format(utcToZonedTime(currentDate, timeZone), 'mm', { locale: pl }).padStart(2, '0');
  const dayName = format(utcToZonedTime(currentDate, timeZone), 'EEEE', { locale: pl });
  const monthName = format(utcToZonedTime(currentDate, timeZone), 'MMMM', { locale: pl });

  return (
    <>
      <div className="weatherBanner relative z-10 lg:grid lg:grid-cols-2 gap-4 pb-[100px]">
        <div className='lg:col-span-1 order-1 lg:order-2 self-center'>
          <div className='weatherIconsDiv self-center'>
          
            <CaseWeatherImage 
              weatherCode={fetchedCityData.hourly.weathercode[hourNow]}
              cloudCover={fetchedCityData.hourly.cloudcover[hourNow]}
              rain={fetchedCityData.hourly.rain[hourNow]}
              snow={fetchedCityData.hourly.snowfall[hourNow]}
              sunrise={fetchedCityData.daily.sunrise[0]}
              sunset={fetchedCityData.daily.sunset[0]}
              todayHours={hourNow}
            />
            
          </div>
        </div>

        <div className='mt-[30px] lg:mt-0 lg:col-span-1 relative z-50 order-2 lg:order-1 self-center'>
          <h1 className="cityTitle my-4 lg:mt-0 lg:mb-12 text-center lg:text-left">{cityName}</h1>

            <h2 className='weatherInfo-medium text-center lg:text-left'>
              <b>Obecnie w Polsce:</b><br/>
              {dayName} {dayNumber} {monthName}, {hourNow}:{minutesNow}
            </h2>
            <h3 className="weatherInfo-big my-4 md:my-8 text-center lg:text-left">{fetchedCityData.hourly.temperature_2m[hourNow]} {fetchedCityData.hourly_units.temperature_2m}</h3>

            <p className="weatherInfo-small text-center lg:text-left"><b>
              <CaseWeatherName weatherCode={fetchedCityData.hourly.weathercode[hourNow]}/>
            </b></p>

              <WeatherInfoTable 
                cloudCover={fetchedCityData.hourly.cloudcover[hourNow]} 
                cloudCoverUnits={fetchedCityData.hourly_units.cloudcover} 
                relativeHumidity={fetchedCityData.hourly.relativehumidity_2m[hourNow]} 
                relativeHumidityUnits={fetchedCityData.hourly_units.relativehumidity_2m} 
                rain={fetchedCityData.hourly.rain[hourNow]} 
                rainUnits={fetchedCityData.hourly_units.rain} 
                snowfall={fetchedCityData.hourly.snowfall[hourNow]} 
                snowfallUnits={fetchedCityData.hourly_units.snowfall} 
                winddirection={fetchedCityData.hourly.winddirection_10m[hourNow]} 
                winddirectionUnits={fetchedCityData.hourly_units.winddirection_10m} 
                windspeed={fetchedCityData.hourly.windspeed_10m[hourNow]} 
                windspeedUnits={fetchedCityData.hourly_units.windspeed_10m}
              />

            </div>
      </div>
    </>
  )
}
