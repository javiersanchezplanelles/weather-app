import { render, screen } from "@testing-library/react"
import { HeaderContainer } from "../header.container"

describe("Header container", () => {
  const onHandleClick = jest.fn()

  it("should render the header", () => {
    render(<HeaderContainer onHandleClick={onHandleClick} />)
    const englishButton = screen.getByRole("button", { name: /english/i })
    const spanishButton = screen.getByRole("button", { name: /spanish/i })

    expect(englishButton).toBeInTheDocument()
    expect(spanishButton).toBeInTheDocument()
  })
})
