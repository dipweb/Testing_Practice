import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";
beforeEach(() => {
  console.log("Run before Each");
});
test("Testing Event", () => {
  console.log("1");
  render(<App />);
  let input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "a" } });
  expect(input.value).toBe("a");
});

test("testing button  click ", () => {
  console.log("2");
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated data"));
});

afterEach(() => {
  console.log("Run after each test case");
});
