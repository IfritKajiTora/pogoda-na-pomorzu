import { format, add } from 'date-fns'
import { pl } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz';
import cities from '@/json/cities.json'
import typeCities from '@/types/cities'
import NotFound from '@/app/not-found'
import backgroundNightOpacity from '@/functions/backgroundNightOpacity'
import WeatherBanner from '@/components/weatherInformation/weatherBanner'
import DaysCards from '@/components/weatherCards/daysCards';
import '@/styles/weather.css'
import BackLink from '@/components/backLink'

export const generateMetadata = async({params}: {params: {slug:string}}) => {
  const {slug} = params;
  const metaDataCity = getCurrentCity({cities, slug})
  if(!metaDataCity) return {
    title: 'Brak miasta - 404',
  }
  return {
    title: `Aktualna pogoda - ${metaDataCity.name}`,
  };
}

const getData = async(currentCity: typeCities) => {
  const currentDate = new Date();
  const polandtimeZone = 'Europe/Warsaw';

  const currentYearMonthDay = format(utcToZonedTime(currentDate, polandtimeZone), 'yyyy-MM-dd', { locale: pl });
  const futureDate = add(currentDate, {days: 8});
  const futureYearMonthDay = format(utcToZonedTime(futureDate, polandtimeZone), 'yyyy-MM-dd', {locale: pl});

  const currentHour = Number(format(utcToZonedTime(currentDate, polandtimeZone), 'HH', { locale: pl }));
  const currentMinutes = Number(format(utcToZonedTime(currentDate, polandtimeZone), 'mm', { locale: pl }));
  const nextRevalidate = 86400 - (currentHour * 3600) - (currentMinutes * 60);

  return await (await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${currentCity.coordinates.latitude}&longitude=${currentCity.coordinates.longitude}&hourly=temperature_2m,rain,snowfall,relativehumidity_2m,cloudcover,windspeed_10m,temperature_2m,winddirection_10m,weathercode&daily=sunrise,sunset&start_date=${currentYearMonthDay}&end_date=${futureYearMonthDay}&timezone=auto`, 
  { next: { revalidate: nextRevalidate } })).json();
}


function getCurrentCity({cities, slug}: {cities: typeCities[], slug:string}){
  let foundCity: typeCities | null = null;
  for(let city of cities){
    const citySlug = city.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l').replace(/ /g, "-");
    if(slug === citySlug){
      return foundCity = city;
    }
  }
}


export default async function City({params}: {params: {slug:string}}) {
  const {slug} = params;
  const currentCity = getCurrentCity({cities, slug});
  if(!currentCity) return <NotFound/>

  const fetchedCityData = await getData(currentCity);

  const currentDate = new Date();
  const polandtimeZone = 'Europe/Warsaw';
  const hourNow = Number(format(utcToZonedTime(currentDate, polandtimeZone), 'HH', { locale: pl }));
  
  const nightBackgroundOpacity = backgroundNightOpacity(hourNow);

  
  return (
    <>    
    <section className='MainPage_Banner'>
      <div className='MainPage_banner_night' style={{opacity: `${nightBackgroundOpacity}`}}></div>
      <div className="container m-auto py-[50px] relative">

        <BackLink/>
        <WeatherBanner fetchedCityData={fetchedCityData} cityName={currentCity.name}/>
        <DaysCards fetchedCityData={fetchedCityData} numberOfDays={8} />

      </div>
    </section>
    </>
  )
}
