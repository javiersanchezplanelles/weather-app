import { render, screen } from "@testing-library/react"
import { HeaderContainer } from "../header.container"

describe("Header container", () => {
  it("should render the header", () => {
    render(<HeaderContainer />)
    const englishButton = screen.getByRole("button", { name: /english/i })
    const spanishButton = screen.getByRole("button", { name: /spanish/i })

    expect(englishButton).toBeInTheDocument()
    expect(spanishButton).toBeInTheDocument()
  })
})
