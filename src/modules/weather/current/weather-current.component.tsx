import { useTranslation } from "react-i18next"
import { Weather } from "../../../domain/weather/weather.interface"
import "./weather-current.component.styles.scss"
import i18n from "../../../i18n/config"
import { LanguageList } from "../../../i18n/language.constants"
import { useEffect, useState } from "react"
import { WeatherForecastComponent } from "../forecast/weather-forecast.component"
import { formatDay } from "../../../utils/format-day"

interface Props {
  weather?: Weather
}

const maxTempImg = process.env.PUBLIC_URL + "/assets/max_temp.png"
const minTempImg = process.env.PUBLIC_URL + "/assets/min_temp.svg"
const windImg = process.env.PUBLIC_URL + "/assets/wind.png"

interface Date {
  day: string
  time: string
}

const getHumidityDescription = (humidity: number) => {
  if (humidity < 40) {
    return "Low"
  } else if (humidity > 70) {
    return "High"
  } else {
    return "Normal"
  }
}

export const WeatherCurrentComponent = ({ weather }: Props) => {
  const { t } = useTranslation()
  const [date, setDate] = useState<Date>()

  useEffect(() => {
    const getCountryFromCode = () => {
      const language = LanguageList.find(
        (language) => language.code === i18n.language
      )
      return language?.country
    }

    const currentDate = new Date()
    const day = currentDate.toLocaleDateString(
      i18n.language + "-" + getCountryFromCode(),
      {
        weekday: "long",
      }
    )

    const time = currentDate.toLocaleTimeString(
      `${i18n.language}-${getCountryFromCode()}`,
      { timeStyle: "short" }
    )
    setDate({ day, time })
  }, [i18n.language])

  return (
    <>
      {weather && (
        <div className="weather-data-container__current">
          <div className="weather-data-container__current__main">
            <div className="weather-data-container__current__city">
              {weather.city}
            </div>
            <div className="weather-data-container__current__description">
              <img
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                alt=""
              />
            </div>
            <div className="weather-data-container__current__temperature">
              {weather.current_temp}
              <div className="degrees">ºC</div>
            </div>
            <div className="date-time">
              <p className="date">
                {formatDay(date!.day)},
                <span className="time">{date!.time}</span>
              </p>
            </div>
            <hr></hr>
            <p>{weather.description}</p>
          </div>
          <div className="weather-data-container__current__highlights">
            <div className="weather-data-container_current__highlights__header">
              <h2>{t("WEATHER.HEADER")}</h2>
            </div>
            <div className="weather-data-container_current__highlights__body">
              <div className="weather-data_container__current_card">
                <p className="title">{t("WEATHER.TEMPERATURE.MAX_MIN")}</p>
                <div className="weather-data-container__max__min_temperatures">
                  <div className="weather-data-container_temperature">
                    <img src={maxTempImg} alt="" />
                    <p>{weather.max_temp}</p>
                  </div>
                  <div className="weather-data-container_temperature">
                    <img src={minTempImg} alt="" />
                    <p>{weather.min_temp}</p>
                  </div>
                </div>
              </div>
              <div className="weather-data_container__current_card">
                <p className="title">{t("WEATHER.WIND")}</p>
                <div className="weather-data-container__current__wind">
                  <p>{weather.wind} km/h</p>
                  <img src={windImg} alt="" />
                </div>
              </div>
              <div className="weather-data_container__current_card">
                <p className="title">{t("WEATHER.HUMIDITY")}</p>
                <div className="weather-data-container-current__humidity">
                  <div className="value">
                    <p>{weather.humidity} %</p>
                  </div>
                  <div className="description">
                    {getHumidityDescription(weather.humidity)}
                  </div>
                </div>
              </div>
            </div>
            <WeatherForecastComponent
              forecastWeather={weather.forecastWeather}
            />
          </div>
        </div>
      )}
    </>
  )
}
