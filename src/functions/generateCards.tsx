import WeatherCard from '@/components/weatherCards/weatherCard'
import typesWeather from '@/types/weather'


export default function generateCards(fetchedCityData: typesWeather, dayArray: number, startFromHour: number, numberOfCards: number){
  const cards = Array.from({ length: numberOfCards }, (_, index) => {
    const updateHour = startFromHour + index;
    const fixedHour = updateHour % 24;
    const animationDelay = Number(index / 25).toFixed(2);

    return(
    <div key={`${dayArray}-${fixedHour}`} id={`${dayArray}-${fixedHour}`} className="weatherCard" style={{animationDelay: `${animationDelay}s`}}>
      <WeatherCard 
        cloudCover={fetchedCityData.hourly.cloudcover[updateHour]}
        cloudCoverUnits={fetchedCityData.hourly_units.cloudcover}
        relativeHumidity={fetchedCityData.hourly.relativehumidity_2m[updateHour]}
        relativeHumidityUnits={fetchedCityData.hourly_units.relativehumidity_2m}
        rain={fetchedCityData.hourly.rain[updateHour]}
        rainUnits={fetchedCityData.hourly_units.rain}
        snowfall={fetchedCityData.hourly.snowfall[updateHour]}
        snowfallUnits={fetchedCityData.hourly_units.snowfall}
        winddirection={fetchedCityData.hourly.winddirection_10m[updateHour]}
        winddirectionUnits={fetchedCityData.hourly_units.winddirection_10m}
        windspeed={fetchedCityData.hourly.windspeed_10m[updateHour]}
        windspeedUnits={fetchedCityData.hourly_units.windspeed_10m}
        weatherCode={fetchedCityData.hourly.weathercode[updateHour]}
        temperature={fetchedCityData.hourly.temperature_2m[updateHour]}
        temperatureUnits={fetchedCityData.hourly_units.temperature_2m} 
        sunrise={fetchedCityData.daily.sunrise[dayArray]} 
        sunset={fetchedCityData.daily.sunset[dayArray]} 
        hours={fixedHour}
      />
    </div>
    )});

  return cards;
}