import { ForecastWeather } from "../../domain/weather/weather.interface"

const API_KEY = "a7555020811464e4894b7df64a450950"

export const getWeather = async (location: string, language?: string) => {
  const response = await Promise.all([
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${API_KEY}&lang=${language}`
    ),
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=Metric&appid=${API_KEY}&lang=${language}`
    ),
  ])

  const [currentWeather, forecastWeather] = await Promise.all(
    response.map((res) => res.json())
  )

  const getCurrentDayForecastWeather = (): ForecastWeather[] => {
    const currentDayHours = forecastWeather.list.slice(0, 8)

    return currentDayHours.map(
      (currentDayHour: {
        weather: { icon: any }[]
        main: { temp: number }
      }) => ({
        icon: currentDayHour.weather[0].icon,
        temp: Math.round(currentDayHour.main.temp),
      })
    )
  }

  return {
    city: currentWeather.name,
    icon: currentWeather.weather[0].icon,
    description: currentWeather.weather[0].description,
    max_temp: Math.round(currentWeather.main.temp_max),
    min_temp: Math.round(currentWeather.main.temp_min),
    current_temp: Math.round(currentWeather.main.temp),
    humidity: currentWeather.main.humidity,
    wind: currentWeather.wind.speed,
    forecastWeather: getCurrentDayForecastWeather(),
  }
}
