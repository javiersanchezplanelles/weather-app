import { FormContainer } from "../form.container"
import { render, screen } from "@testing-library/react"

describe("Form container", () => {
  it("should render the form", () => {
    render(<FormContainer />)

    const nameInput = screen.getByRole("textbox", { name: "CONTACT_FORM.NAME" })
    const birthdateInput = screen.getByLabelText("CONTACT_FORM.DATE_OF_BIRTH")
    const cityInput = screen.getByRole("textbox", { name: "CONTACT_FORM.CITY" })
    const emailInput = screen.getByRole("textbox", {
      name: "CONTACT_FORM.EMAIL",
    })
    const submitButton = screen.getByRole("button", {
      name: "CONTACT_FORM.SEND_BUTTON",
    })

    expect(nameInput).toBeInTheDocument()
    expect(birthdateInput).toBeInTheDocument()
    expect(cityInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})
