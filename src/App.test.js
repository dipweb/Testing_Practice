import { render, screen } from "@testing-library/react";
import App from "./App";
import getData from "./api";

test("testing -- for is My First App rendered", () => {
  render(<App />);
  let text = screen.getByText("First Testing App");
  expect(text).toBeInTheDocument();
});
test("testing -- post rendered or not", async () => {
  render(<App />);
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    json: async () => [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
    ],
  });
  const list = await screen.findAllByRole("listitem");
  expect(list).not.toHaveLength(0);
});
