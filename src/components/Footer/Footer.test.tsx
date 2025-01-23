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

  it("the three buttons are in correct order", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent("About Me");
    expect(buttons[1]).toHaveTextContent("Projects");
    expect(buttons[2]).toHaveTextContent("Contact Me");
  });
});
