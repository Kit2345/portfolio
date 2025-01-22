import { screen, render } from "@testing-library/react";
import Header from "./Header";
describe("Header tests - start - will change later", () => {
  it("should render the title", () => {
    render(<Header />);
    expect(screen.getByText("This is the header.")).toHaveTextContent(
      "This is the header"
    );
  });
});
