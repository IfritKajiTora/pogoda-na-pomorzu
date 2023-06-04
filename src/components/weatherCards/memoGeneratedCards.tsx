import React, {useMemo} from 'react'
import typesWeather from '@/types/weather'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz';
import generateCards from '@/functions/generateCards'


export default function MemoGeneratedCards({fetchedCityData, index, updateHour}:{fetchedCityData: typesWeather, index: number, updateHour: number}){
  const getCards = useMemo(() => {
    if (index === 0) {
      const currentDate = new Date();
      const polandtimeZone = 'Europe/Warsaw';
      const currentHour = Number(format(utcToZonedTime(currentDate, polandtimeZone), 'HH', { locale: pl }));
      const todayNumberOfCards = 23 - currentHour;
      return generateCards(fetchedCityData, index, currentHour + 1, todayNumberOfCards);
    } else {
      return generateCards(fetchedCityData, index, updateHour, 24);
    }
  }, [fetchedCityData, index, updateHour]);

  return <>{getCards}</>;
}