import "./App.scss"
import { HeaderContainer } from "./modules/header/header.container"
import { SidebarContainer } from "./modules/sidebar/sidebar.container"
import { WeatherContainer } from "./modules/weather/weather.container"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import { APP_ROUTES } from "./domain/routes/routes.constants"
import { FormContainer } from "./modules/form/form.container"

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderContainer />
        <SidebarContainer />
        <Routes>
          <Route path={APP_ROUTES.DASHBOARD} element={<WeatherContainer />} />
          <Route path={APP_ROUTES.CONTACT_FORM} element={<FormContainer />} />
          <Route path="*" element={<WeatherContainer />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
