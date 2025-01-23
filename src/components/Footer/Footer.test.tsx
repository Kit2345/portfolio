import { screen, render } from "@testing-library/react";
import Footer from "./Footer";
import crown_rarity_symbol from "../../assets/crown-rarity-symbol.png";

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

  it("the three buttons are in correct order", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent("About Me");
    expect(buttons[1]).toHaveTextContent("Projects");
    expect(buttons[2]).toHaveTextContent("Contact Me");
  });

  it("should have a crown rarity image", () => {
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", crown_rarity_symbol);
  });

  it("should have a paragraph summarising me", () => {
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toHaveTextContent("Full-stack software developer");
    expect(paragraph).toHaveTextContent("research scientist");
    expect(paragraph).toHaveTextContent("problem-solving");
  });
});
