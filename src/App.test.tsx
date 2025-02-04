import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App tests", () => {
  beforeEach(() => render(<App />));
  it("App renders properly", () => {});

  it("Contact Me Button should load Contact Me page", async () => {
    const user = userEvent.setup();
    const contactMeButton = screen.getByRole("button", { name: /contact me/i });

    expect(contactMeButton).toBeEnabled();
    expect(contactMeButton).toBeInTheDocument();

    await user.click(contactMeButton);

    let result = screen.getByRole("heading", { level: 1 });
    expect(result).toHaveTextContent("Get in contact");
  });
});
