import { LanguageList } from "../../i18n/language.constants"
import { useTranslation } from "react-i18next"
import "./header.container.styles.scss"
import { CityList } from "../../domain/cities/cities.constants"
import { useWeather } from "../../hooks/useWeather"

export const HeaderContainer = () => {
  const { getWeatherData } = useWeather()
  const { i18n } = useTranslation()
  const handleLanguage = (language: string) => {
    i18n.changeLanguage(language)
    getWeatherData(CityList[0], i18n.language)
  }

  return (
    <header className="header-container">
      {LanguageList.map((language) => (
        <button
          className={
            language.code === i18n.language
              ? "header-container__button--selected"
              : ""
          }
          key={language.name}
          onClick={() => handleLanguage(language.code)}
        >
          <img
            src={
              process.env.PUBLIC_URL +
              `/assets/language-flags/${language.code}.png`
            }
            alt={language.name}
          />
        </button>
      ))}
    </header>
  )
}
