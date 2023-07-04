import { useForm } from "react-hook-form"
import "./form.container.styles.scss"
import { useTranslation } from "react-i18next"

export const FormContainer = () => {
  const { t } = useTranslation()
  const {
    register,
    formState: { isValid },
  } = useForm()

  return (
    <form className="contact-form">
      <label>
        {t("CONTACT_FORM.NAME")}
        <input
          type="text"
          {...register("name", {
            required: { value: true, message: `name is required` },
          })}
        />
      </label>
      <label>
        {t("CONTACT_FORM.DATE_OF_BIRTH")}
        <input
          type="date"
          {...register("birthDate", {
            required: { value: true, message: `birth date is required` },
          })}
        />
      </label>
      <label>
        {t("CONTACT_FORM.CITY")}
        <input
          type="text"
          {...register("city", {
            required: { value: true, message: `city is required` },
          })}
        />
      </label>
      <label>
        {t("CONTACT_FORM.EMAIL")}
        <input
          type="email"
          {...register("email", {
            required: { value: true, message: `email is required` },
          })}
        />
      </label>

      <input
        type="submit"
        value={t("CONTACT_FORM.SEND_BUTTON")}
        disabled={!isValid}
      />
    </form>
  )
}
