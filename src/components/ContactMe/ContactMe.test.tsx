import { screen, render } from "@testing-library/react";
import ContactMe from "./ContactMe";

describe("contact me page should render correctly", () => {
  beforeEach(() => render(<ContactMe />));

  it("should exist", () => {});

  it("should have a heading with contact me", () => {
    const contactMe = screen.getByRole("heading", { level: 1 });
    expect(contactMe).toHaveTextContent("Get in contact");
  });

  it("should have the correct linkedin link", () => {
    const linkedin = screen.getByRole("link", { name: "LinkedIn" });
    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/wing-kit-leung/"
    );
  });

  it("should have the correct GitHub link", () => {
    const gitHub = screen.getByRole("link", { name: "GitHub" });
    expect(gitHub).toBeInTheDocument();
    expect(gitHub).toHaveAttribute("href", "https://github.com/Kit2345");
  });

  it("should have a contact form", () => {
    const contactForm = screen.getByRole("form");
    expect(contactForm).toBeInTheDocument();
  });
});
