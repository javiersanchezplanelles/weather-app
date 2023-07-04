import { WeatherCurrentComponent } from "./current/weather-current.component"
import "./weather.container.styles.scss"
import { Weather } from "../../domain/weather/weather.interface"

interface Props {
  weather: Weather
}

export const WeatherContainer = ({ weather }: Props) => {
  return (
    <section className="weather-data-container">
      <WeatherCurrentComponent weather={weather} />
    </section>
  )
}
