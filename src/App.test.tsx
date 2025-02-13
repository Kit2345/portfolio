import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
// import AboutMe from "./components/AboutMe/AboutMe";

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

  it("About Me Button should load About Me page", async () => {
    const user = userEvent.setup();
    const contactMeButton = screen.getByRole("button", { name: /contact me/i });
    const aboutMeButton = screen.getByRole("button", { name: /about me/i });

    expect(aboutMeButton).toBeEnabled();
    expect(aboutMeButton).toBeInTheDocument();

    await user.click(contactMeButton);
    await user.click(aboutMeButton);

    let result = screen.getByRole("heading", { level: 1 });
    expect(result).toHaveTextContent("About Me");
  });

  it("Projects button should load projects page", async () => {
    const projectButton = screen.getByRole("button", { name: /projects/i });

    expect(projectButton).toBeEnabled();
    expect(projectButton).toBeInTheDocument();

    await userEvent.click(projectButton);

    let result = screen.getByRole("heading", { level: 1 });
    expect(result).toHaveTextContent("Projects");
  });
});
