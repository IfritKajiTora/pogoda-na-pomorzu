import React from 'react'
import WeatherTable from '@/components/weatherInformation/weatherInfoTable'
import CaseWeatherName from '@/components/weatherInformation/caseWeatherName'
import CaseWeatherImage from '@/components/weatherInformation/caseWeatherImage'
import typesWeatherTable from '@/types/weatherTable'

interface Props extends typesWeatherTable {
  weatherCode: number;
  temperature: number | string;
  temperatureUnits: string;
  sunrise: Date;
  sunset: Date;
  hours: number;
  smallerImages?: boolean;
}

export default function WeatherCard(props: Props) {
  return (
    <>
    <div className='weatherCardInfo'>
      <h3 className='weatherCardHour'>{props.hours}:00</h3>

      <div className='weatherCardImage'>
        <CaseWeatherImage 
          weatherCode={props.weatherCode}
          cloudCover={props.cloudCover}
          rain={props.rain}
          snow={props.snowfall}
          sunrise={props.sunrise}
          sunset={props.sunset}
          todayHours={props.hours}
          smallerImages={true}
        />
      </div>

      <h3 className='weatherCardTemperature'>{props.temperature} {props.temperatureUnits}</h3>
      <p className="weatherInfo-small text-center lg:text-left"><b>
        <CaseWeatherName weatherCode={props.weatherCode}/>
      </b></p>

      <div className='weatherInfoCardSmall'>
        <WeatherTable 
            cloudCover={props.cloudCover}
            cloudCoverUnits={props.cloudCoverUnits}
            relativeHumidity={props.relativeHumidity}
            relativeHumidityUnits={props.relativeHumidityUnits}
            rain={props.rain}
            rainUnits={props.rainUnits}
            snowfall={props.snowfall}
            snowfallUnits={props.snowfallUnits}
            winddirection={props.winddirection}
            winddirectionUnits={props.winddirectionUnits}
            windspeed={props.windspeed}
            windspeedUnits={props.windspeedUnits}
          />
      </div>

    </div>
    </>
  )
}
