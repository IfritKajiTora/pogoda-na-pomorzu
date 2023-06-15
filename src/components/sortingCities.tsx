'use client'

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import cities from '@/json/cities.json'
import typeCities from '@/types/cities'

export default function SortingCities() {
  const [sortedCities, changeSortion] = useState(cities);
  const [sortOption, setSortOption] = useState('name');

  const sortCities = (cities: typeCities[], sortOption: string) => {
    const sortedArray = [...cities];

    switch (sortOption) {
      case 'name':
        return sortedArray.sort((a, b) => a.name.localeCompare(b.name));
      case 'reverseName':
        return sortedArray.sort((a, b) => b.name.localeCompare(a.name));
      case 'length':
        return sortedArray.sort((a, b) => a.name.length - b.name.length);
      case 'reverseLength':
        return sortedArray.sort((a, b) => b.name.length - a.name.length);
      default:
        return sortedArray;
    }
  };

  const handleSortChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    const sortedArray = sortCities(cities, sortOption);
    changeSortion(sortedArray);
  }, [sortOption]);


  return (
    <>
      <label htmlFor='citiesSortingSelector' className='Banner_text'>
        Sortowanie według:
      </label>
      <select value={sortOption} id='citiesSortingSelector' onChange={handleSortChange} className='mb-8'>
        <option value='name'>nazw a-z</option>
        <option value='reverseName'>nazw z-a</option>
        <option value='length'>nazw krótkie-długie</option>
        <option value='reverseLength'>nazw długie-krótkie</option>
      </select>

      <div className='outlineWhiteOpacity city-list-on-xxs grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
        {sortedCities.map((city: typeCities) => {
          const slug = city.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l').replace(/ /g, '-');
          return (
            <Link key={city.id} prefetch={false} className='cityNameLink' href={`./miasta/${slug}`}>
              {city.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}