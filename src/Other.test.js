import { render, screen } from "@testing-library/react";
import App from "./App";

test("Other learn react link", () => {
  render(<App />);
  const title = screen.getByTitle("Book Image");
  const linkElement = screen.getByText(/First Testing App/i);
  expect(linkElement).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test(" Other testing Input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkPlaceHolder = screen.getByPlaceholderText("Enter User Name");
  expect(checkInput).toBeInTheDocument();
  expect(checkPlaceHolder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "userName");
});
