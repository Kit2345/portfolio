import { screen, render } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("About Me page should render properly", () => {
  beforeEach(() => render(<AboutMe />));

  it("should exist", () => {});

  it("should have an About Me blurb", () => {
    const test = screen.getByText("About Me");
    expect(test).toBeInTheDocument();
  });

  it("should have an image", () => {
    const test = screen.getByRole("img");
    expect(test).toBeInTheDocument();
  });

  it("this test should fail", () => {
    const test = screen.getByText("This doesn't exist");
    expect(test).toBeInTheDocument();
  });
});
