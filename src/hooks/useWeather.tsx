import { useCallback, useState } from "react"
import { CityList } from "../domain/cities/cities.constants"
import { Weather } from "../domain/weather/weather.interface"
import { getWeather } from "../services/weather/weather.api"

export const useWeather = () => {
  const [weather, setWeather] = useState<Weather>()

  const getWeatherData = useCallback(
    async (location: string = CityList[0], language?: string) => {
      const weatherResponse = await getWeather(location, language)
      setWeather(weatherResponse)
    },
    []
  )

  return { weather, getWeatherData }
}
