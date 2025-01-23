import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer renders correctly", () => {
  beforeEach(() => render(<Footer />));

  it("Footer should exist", () => {});

  it("should have three buttons", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });
});
