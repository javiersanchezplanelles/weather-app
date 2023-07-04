import { useEffect } from "react"
import { useWeather } from "../../hooks/useWeather"
import { WeatherCurrentComponent } from "./current/weather-current.component"
import "./weather.container.styles.scss"
import { useLocation } from "react-router-dom"
import { CityList } from "../../domain/cities/cities.constants"

export const WeatherContainer = () => {
  const { weather, getWeatherData } = useWeather()

  const location = useLocation()

  useEffect(() => {
    getWeatherData(location.state ? location.state.city : CityList[0])
  }, [getWeatherData, location.state])

  return (
    <section className="weather-data-container">
      <WeatherCurrentComponent weather={weather} />
    </section>
  )
}
