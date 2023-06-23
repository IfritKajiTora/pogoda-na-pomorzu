'use client'
import React, {useState, useEffect} from 'react'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz';
import cities from '@/json/cities.json'
import typeCities from '@/types/cities'
import Link from 'next/link';
import Image from 'next/image';
import SunOrMoonBanner from '@/components/sunOrMoonBanner'
import backgroundNightOpacity from '@/functions/backgroundNightOpacity'
import useDebounce from '@/functions/useDebounce';


export default function Home() {
  const currentDate = new Date();
  const polandtimeZone = 'Europe/Warsaw';

  const [currentHour, updateCurrentHour] = useState<number | null>(null);
  const [nightBackgroundOpacity, updateBacgkroundNightOpacity] = useState<number | null>(0.5);

  useEffect(() => { updateCurrentHour(Number(format(utcToZonedTime(currentDate, polandtimeZone), 'HH', { locale: pl }))); },[]);
  useEffect(() => { updateBacgkroundNightOpacity(backgroundNightOpacity(currentHour)); },[currentHour]);

  const [search, updateSearch] = useState('');
  const [citiesList, updateCitiesList] = useState<typeCities[]>([]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateSearch(value);
  }

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    let matchedCities: typeCities[] = [];
    if (search.length >= 1) {
      const normalizedSearch = search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l');
      for (let city of cities) {
        if (matchedCities.length >= 6) break;
        const normalizedCityName = city.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l');
        const match = normalizedCityName.includes(normalizedSearch);
        if (match) {
          const slug = normalizedCityName.replace(/ł/g, 'l').replace(/ /g, "-");
          const cityData = { ...city, slug };
          matchedCities.push(cityData);
        }
      }
    }
    updateCitiesList(matchedCities);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);


  return (
    <> 
    <section className='MainPage_Banner'>
      <div className='MainPage_banner_night' style={{opacity: `${nightBackgroundOpacity}`}}></div>
      
      <div className="container m-auto py-[50px] relative">
        <div className='relative z-10 lg:grid lg:grid-cols-5 gap-4'>

          <div className='lg:col-span-2 order-1 lg:order-2 self-center'>
            <SunOrMoonBanner currentHour={currentHour}/>
          </div>

          <div className='lg:col-span-3 relative z-50 order-2 lg:order-1 text-center lg:text-left pt-[30px] lg:pt-0 self-center lg:mt-[220px]'>
            <h1 className="Banner_title">POGODA NA POMORZU</h1>
            <p className='Banner_text'>Mała aplikacja pogodowa wykorzystująca API open-meteo z użyciem &quot;Next: revalidate&quot;, pobierająca nowe dane z API raz dziennie o godzinie 0:00 czasu Polskiego.</p>

            <Link href={`./miasta`} prefetch={false} className='miastaLink'>
              <p>Zobacz wszystkie miasta</p>
            </Link>

            <div className='relative max-w-[600px] mt-[50px] mx-auto lg:mx-0'>
              <input className='Banner_search' autoFocus type="text" placeholder='Wpisz nazwę miasta' value={search} onChange={(e) => inputChange(e)} />
              <Image className='arrowAnimatedOnInput' src='/arrow-wind.png' width={40} height={40} alt='arrow'/>
              
                {search.length >= 1 && (
                  <ul className='Banner_search_list'>
                    {citiesList.length >= 1 ? (
                      <>
                        {citiesList.map((city) => (
                          <li key={city.id}>
                            <Link href={`./miasta/${city.slug}`} prefetch={false}>
                              <p><Image src='/arrow-small.png' width={24} height={22} alt='arrow'/>{city.name}</p>
                            </Link>
                          </li>
                        ))}
                      </>
                    ) : <li>BRAK MIASTA W BAZIE DANYCH</li>}
                  </ul>
                )}
            </div>
          </div>
        </div>    
      </div>
    </section>
    </>
  )
}
