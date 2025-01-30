import { screen, render } from "@testing-library/react";
import ContactMe from "./ContactMe";

describe("contact me page should render correctly", () => {
  beforeEach(() => render(<ContactMe />));

  it("should exist", () => {});

  it("should have the correct linkedin link", () => {
    const linkedin = screen.getByRole("link", { name: "LinkedIn" });
    expect(linkedin).toBeInTheDocument;
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/wing-kit-leung/"
    );
  });
});
