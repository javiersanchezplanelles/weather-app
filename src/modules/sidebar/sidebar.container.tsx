import { Link, useNavigate } from "react-router-dom"
import { CityList } from "../../domain/cities/cities.constants"
import "./sidebar.container.styles.scss"
import { APP_ROUTES } from "../../domain/routes/routes.constants"
import { useTranslation } from "react-i18next"

export const SidebarContainer = () => {
  const { t } = useTranslation()
  let navigate = useNavigate()

  const handleOnCityClick = () => {
    navigate(APP_ROUTES.DASHBOARD)
  }

  return (
    <nav className="sidebar-container">
      <ul>
        {CityList.map((city) => (
          <li key={city}>
            <Link
              to={APP_ROUTES.DASHBOARD}
              state={{ city }}
              onClick={handleOnCityClick}
            >
              {city}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={APP_ROUTES.CONTACT_FORM}>{t("SIDEBAR.CONTACT_BUTTON")}</Link>
    </nav>
  )
}
