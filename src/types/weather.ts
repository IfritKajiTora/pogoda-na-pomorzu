export default interface Weather {
  daily: Daily
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: HourlyUnits
  hourly: Hourly
}

export interface HourlyUnits {
  time: string
  temperature_2m: string
  rain: string
  snowfall: string
  cloudcover: string
  windspeed_10m: string
  winddirection_10m: string
  relativehumidity_2m: string
  weathercode: {[key: number]: number}
}
export interface Hourly {
  time: string
  temperature_2m: string
  rain: {[key: number]: number}
  snowfall: {[key: number]: number}
  cloudcover: {[key: number]: number}
  windspeed_10m: string
  winddirection_10m: string
  relativehumidity_2m: string
  weathercode: {[key: number]: number}
}
export interface Daily{
  sunrise: Date[]
  sunset: Date[]
}