export interface Weather {
  city: string
  icon: string
  description: string
  max_temp: number
  min_temp: number
  current_temp: number
  wind: number
  humidity: number
  forecastWeather: ForecastWeather[]
}

export interface ForecastWeather {
  icon: string
  temp: number
}
