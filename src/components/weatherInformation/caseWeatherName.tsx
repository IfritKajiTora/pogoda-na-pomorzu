import React from 'react'

export default function CaseWeatherName({weatherCode}: {weatherCode: number | undefined}) {
  return (
    <>
      {(() => {
        switch (weatherCode) {
          case 0: return 'Bezchmurne niebo'
          case 1: return 'Przeważnie bezchmurnie'
          case 2: return 'Częściowo pochmurnie'
          case 3: return 'Całkowicie pochmurnie'
          case 45:
          case 48: return 'Mgła i szron'
          case 51: return 'Lekka mżawka'
          case 53: return 'Umiarkowana mżawka'
          case 55: return 'Gęste opady'
          case 56: return 'Lekka marznąca mżawka'
          case 57: return 'Gęsta marznąca mżawka'
          case 61: return 'Słaby deszcz'
          case 63: return 'Umiarkowany deszcz'
          case 65: return 'Silne opady deszczu'
          case 71: return 'Słabe opady śniegu'
          case 73: return 'Umiarkowane opady śniegu'
          case 75: return 'Silne opady śniegu'
          case 77: return 'Płatki śniegu'
          case 80: return 'Słabe przelotne opady deszczu'
          case 81: return 'Umiarkowane opady deszczu'
          case 82: return 'Gwałtowne opady deszczu'
          case 85: return 'Słabe przelotne opady śniegu'
          case 86: return 'Silne opady śniegu'
          case 95: return 'Burza słaba lub umiarkowana'
          case 96: return 'Burza ze słabym gradobiciem'
          case 99: return 'Burze z mocnym gradobiciem'
          default: return null;
        }
      })()}
    </>
  )
}
