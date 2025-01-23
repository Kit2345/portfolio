import { screen, render } from "@testing-library/react";
import Header from "./Header";
import grass_energy from "../../assets/grass_energy_card_vector_symbol_by_biochao_dezrx3b.png";

describe("Header renders properly", () => {
  beforeEach(() => render(<Header />));

  it("should render menu button", () => {
    const menu_button = screen.getByRole("button");
    expect(menu_button).toBeInTheDocument();
    expect(menu_button).toHaveTextContent("menu");
  });

  it("should render grass energy image", () => {
    const energy_img = screen.getByRole("img");
    expect(energy_img).toBeInTheDocument();
    expect(energy_img).toHaveAttribute("src", grass_energy);
  });

  it("should correct text", () => {
    expect(screen.getByText("Full-stack Developer")).toBeInTheDocument();
    expect(screen.getByText("Wing-Kit Leung")).toBeInTheDocument();
  });
});
