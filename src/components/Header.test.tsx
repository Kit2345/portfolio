import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("App tests", () => {
  it("should render the title", () => {
    render(<Header />);

    expect(screen.getByText("This is the header")).toHaveTextContent(
      "This is the header"
    );
  });
});
