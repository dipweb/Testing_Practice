import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const title = screen.getByTitle("Book Image");
  const linkElement = screen.getByText(/First Testing App/i);
  expect(linkElement).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("testing Input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkPlaceHolder = screen.getByPlaceholderText("Enter User Name");
  expect(checkInput).toBeInTheDocument();
  expect(checkPlaceHolder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "userName");
});

describe("UI test Sets", () => {
  test("UI test 1", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });
  test("UI test 2", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });
});
describe.only("UI test Sets", () => {
  test("UI test 1", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });
  test("UI test 2", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });
});
