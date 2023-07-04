import { useTranslation } from "react-i18next"
import { ForecastWeather } from "../../../domain/weather/weather.interface"
import "./weather-forecast.component.styles.scss"

interface Props {
  forecastWeather?: ForecastWeather[]
}

export const WeatherForecastComponent = ({ forecastWeather }: Props) => {
  const { t } = useTranslation()

  const date = new Date()
  const nextThreeHours = () => {
    date.setHours(date.getHours() + 3)
    return date.getHours()
  }

  return (
    <>
      <h2 className="weather-data-container__forecast__header">
        {t("FORECAST_WEATHER.HEADER")}
      </h2>
      {forecastWeather && (
        <div className="weather-data-container__forecast">
          {forecastWeather.map((item, index) => (
            <div
              className="weather-data-container__forecast__description"
              key={index}
            >
              <p>{nextThreeHours()}</p>
              <img
                src={`http://openweathermap.org/img/w/${item.icon}.png`}
                alt=""
              />
              <p className="weather-data-container__forecast__description__temperature">
                {item.temp} <span>ºC</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
