// import { screen, render } from "@testing-library/react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("App renders properly", () => {
    beforeEach(() => render(<App />));
  });
});
