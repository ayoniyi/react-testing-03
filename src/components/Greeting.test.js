import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

// test('renders hello world as a test', () => {
//   // Arrrange
//   render(<Greeting />)

//   // Act
//   //nothing

//   //Assert
//   const helloWorldElement = screen.getByText('Hello World', { exact: false })
//   // check if element exists
//   expect(helloWorldElement).toBeInTheDocument()
// })

// Using a testing suite

describe('Greeting Component', () => {
  test('renders hello world as a test', () => {
    // Arrrange
    render(<Greeting />)

    // Act
    //nothing

    //Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false })
    // check if element exists
    expect(helloWorldElement).toBeInTheDocument()
  })

  test('renders good to see you if button was NOT clicked', () => {
    render(<Greeting />)

    const outputElement = screen.getByText('good to see you', { exact: false })
    expect(outputElement).toBeInTheDocument()
  })

  test('renders Changed! if button was clicked', () => {
    //Arrange
    render(<Greeting />)

    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const outputElement = screen.getByText('Changed!', { exact: false })
    expect(outputElement).toBeInTheDocument()
  })

  test('does not render good to see you if button was clicked', () => {
    //Arrange
    render(<Greeting />)

    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    })
    expect(outputElement).toBeNull()
  })
})
