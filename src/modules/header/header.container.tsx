import { LanguageList } from "../../i18n/language.constants"
import "./header.container.styles.scss"
import i18n from "../../i18n/config"

interface Props {
  onHandleClick: (language: string) => void
}

export const HeaderContainer = ({ onHandleClick }: Props) => {
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
          onClick={() => onHandleClick(language.code)}
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
