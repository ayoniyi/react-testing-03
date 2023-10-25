import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

// render elements

test("username input should be rendered", () => {
  //Arrange
  render(<Login />);
  //Assert
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});
test("password input should be rendered", () => {
  //Arrange
  render(<Login />);
  //Assert
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});
test("button should be rendered", () => {
  //Arrange
  render(<Login />);
  //Assert
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

// elements should be emoty

test("username input should be empty by default", () => {
  //Arrange
  render(<Login />);
  //Assert
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe("");
});
test("password input should be empty by default", () => {
  //Arrange
  render(<Login />);
  //Assert
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

// button should be disabled

// test("button should be disabled by default", () => {
//   //Arrange
//   render(<Login />);
//   //Assert
//   const buttonEl = screen.getByRole("button");
//   expect(buttonEl).toBeDisabled();
// });

// inputs should change

test("username input should change", () => {
  //Arrange
  render(<Login />);
  //Act
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(userInputEl, { target: { value: testValue } });
  //Assert
  expect(userInputEl.value).toBe(testValue);
});
test("password input should change", () => {
  //Arrange
  render(<Login />);
  //Act
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  //Assert
  expect(passwordInputEl.value).toBe(testValue);
});

// user should be rendered after submit

test("user should be rendered after fetching", async () => {
  //Arrange
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";
  //Act
  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);
  //Assert
  const userItem = await screen.findByText("John");
  //expect(userItem).toBeInTheDocument();
  expect(passwordInputEl.value).toBe(testValue);
});
