"use client"
import {useState, useEffect} from 'react'

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() =>{
    const timeoutId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
}
