import { screen, render } from "@testing-library/react";
import Main from "./Main";

describe("main page should render properly", () => {
  beforeEach(() => render(<Main />));
  it("should exist", () => {});

  it("should load the about me page", () => {
    const images = screen.getAllByRole("img");
    expect(images[0]).toBeInTheDocument;

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument;
    expect(heading).toHaveTextContent("About Me");
  });
});
