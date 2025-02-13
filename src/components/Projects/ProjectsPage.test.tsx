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

  it("should have multiple projects", () => {
    const projectHeadings = screen.getAllByRole("heading", { level: 3 });
    expect(projectHeadings.length).toBeGreaterThan(2);
  });

  it("should have a project called Stitch the Weather, with a demo link and repo link", () => {
    const headings = screen.getAllByRole("heading", { level: 3 });
    const stitch = headings.some(
      (heading) => heading.textContent === "Stitch the Weather"
    );
    expect(stitch).toBe(true);

    const demoLink = screen.getByRole("link", { name: /demo link/i });
    expect(demoLink).toBeInTheDocument;

    const repoLink = screen.getByRole("link", { name: /repo link/i });
    expect(repoLink).toBeInTheDocument;
  });
});
