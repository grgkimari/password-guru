import { render, screen } from '@testing-library/react';
import App from './App';
import Checker from './Components/Checker'

describe(
  "Checker",
  () => {
    test(
      "renders a generate button",
      () => {
        render(<Checker />)
      const generateButton = screen.getByRole("button",
      {
        name : "Generate"
      })
      expect(generateButton).toBeInTheDocument()
      }
    )
    test(
      "renders a check button",
      () => {
        render(<Checker />)
      const checkButton = screen.getByRole("button",
      {
        name : "check"
      })
      expect(checkButton).toBeInTheDocument()
      }
    )
    test(
      "renders an input box",
      () => {
        render(<Checker />)
      const inputField = screen.getByRole("textBox",
      {
        name : "password"
      })
      expect(inputField).toBeInTheDocument()
      }
    )
    test(
      "renders the result display area",
      () => {
        render(<Checker />)
      const display = screen.getByTitle("Result")
      expect(display).toBeInTheDocument()
      }
    )
    
  }
)
