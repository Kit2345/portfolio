import { screen, render } from "@testing-library/react";
import ProjectsPage from "./ProjectsPage";

describe("projects page renders properly", () => {
  beforeEach(() => render(<ProjectsPage />));

  it("should exist", () => {});

  it("should have heading Projects", () => {
    const projetsHeading = screen.getByRole("heading", { level: 1 });
    expect(projetsHeading).toBeInTheDocument;
    expect(projetsHeading).toHaveTextContent("Projects");
  });
});
