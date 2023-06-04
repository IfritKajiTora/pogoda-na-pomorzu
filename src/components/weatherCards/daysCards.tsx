'use client'

import React from 'react'
import typesWeather from '@/types/weather'
import MemoGeneratedCards from '@/components/weatherCards/memoGeneratedCards'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz';

export default function DaysCards({ fetchedCityData, numberOfDays }: { fetchedCityData: typesWeather, numberOfDays: number }) {
  const [activeCard, setActiveCard] = React.useState<number>(0);

  const renderDaysCards = Array(numberOfDays).fill(null).map((_, index) => {
    if(index === 0){
      const currentDate = new Date();
      const polandtimeZone = 'Europe/Warsaw';
      const currentHour = Number(format(utcToZonedTime(currentDate, polandtimeZone), 'HH', { locale: pl }));
      if(currentHour === 23){
        return null;
      }
    }

    const updateHour = 24 * index;
    const dateString = fetchedCityData.hourly.time[24 * index];
    const date = new Date(dateString);
    const dayNumber = date.getDate();
    const dayName = date.toLocaleString("pl", { weekday: "long" });
    const monthName = date.toLocaleString("pl", { month: "long" });

    const uniqueKey = `dayNumber-${index}`;

    return (
      <div key={uniqueKey}>
        <div 
          className='showCardsOnActive'
          data-active-list={activeCard === index ? true : false}
          onClick={() => setActiveCard(current => current === index ? -1 : index)}
        >
          <h2 className='weatherCardsDayName'>{dayName} {dayNumber} {monthName} {index === 0 ? '(dzisiaj)' : index === 1 ? '(jutro)' : null}</h2>

          <div className='weatherBannerOtherHoursInfo'>
            <div className='grid-cards'>
              {activeCard === index && (
                <MemoGeneratedCards
                  fetchedCityData={fetchedCityData}
                  index={index}
                  updateHour={updateHour}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {renderDaysCards}
    </>
  );
}

