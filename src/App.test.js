import { render, screen } from '@testing-library/react';
import App from './App';
import Checker from './Components/Checker'
import user from '@testing-library/user-event'



function dispatch(action){
  return mainReducer(initialState, action)
}

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
      "renders an input box",
      () => {
        render(<Checker />)
      const inputField = screen.getByPlaceholderText("Enter the password here.")
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

    test(
      "displays a score of zero by default",
      () => {
        render(<Checker passwordText = "" strength={null}/>)
        const scoreDisplayArea = screen.getByRole("heading", {
          name: "strength"
        })
        expect(scoreDisplayArea).toHaveTextContent('0')
      }
    )
    
    test(
      "renders correctly with props",
      () => {
        render(<Checker passwordText="hull" strength={0} />)
        const scoreDisplayArea = screen.getByRole("heading", {
          name: "strength"
        })
        const inputBox = screen.getByRole("textbox")
        const strengthDisplayArea = screen.getByRole("heading", {
          name : "string-strength"
        })
        expect(scoreDisplayArea).toHaveTextContent('0')
        expect(strengthDisplayArea).toHaveTextContent("Terrible")
        expect(inputBox).toHaveValue("hull")
      }
    )
    
  }
)
