import { render } from "@testing-library/react";
import App from "./App";

test("Sanpshot Testing for app component", () => {
  const container = render(<App />);

  expect(container).toMatchSnapshot();
});
