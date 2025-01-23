import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer renders correctly", () => {
  beforeEach(() => render(<Footer />));

  it("Footer should exist", () => {});

  it("should have three buttons and correctly labelled", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
    expect(screen.getByText("About Me")).toBeInTheDocument;
    expect(screen.getByText("Projects")).toBeInTheDocument;
    expect(screen.getByText("Contact Me")).toBeInTheDocument;
  });
});
