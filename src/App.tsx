import "./App.scss"
import { HeaderContainer } from "./modules/header/header.container"
import { SidebarContainer } from "./modules/sidebar/sidebar.container"
import { WeatherContainer } from "./modules/weather/weather.container"
import { Routes, Route, useLocation } from "react-router-dom"
import { APP_ROUTES } from "./domain/routes/routes.constants"
import { FormContainer } from "./modules/form/form.container"
import { useEffect } from "react"
import { CityList } from "./domain/cities/cities.constants"
import { useWeather } from "./hooks/useWeather"
import { useTranslation } from "react-i18next"

function App() {
  const { i18n } = useTranslation()
  const { weather, getWeatherData } = useWeather()

  const location = useLocation()

  useEffect(() => {
    getWeatherData(
      location.state ? location.state.city : CityList[0],
      i18n.language
    )
  }, [getWeatherData, location.state, i18n.language])

  const handleLanguage = (language: string) => i18n.changeLanguage(language)

  return (
    <div className="App">
      <HeaderContainer onHandleClick={handleLanguage} />
      <SidebarContainer />
      <Routes>
        <Route
          path={APP_ROUTES.DASHBOARD}
          element={weather && <WeatherContainer weather={weather} />}
        />
        <Route path={APP_ROUTES.CONTACT_FORM} element={<FormContainer />} />
      </Routes>
    </div>
  )
}

export default App
