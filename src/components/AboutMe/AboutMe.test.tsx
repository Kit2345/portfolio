import { screen, render } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("About Me page should render properly", () => {
  beforeEach(() => render(<AboutMe />));

  it("should exist", () => {});

  it("should have an h1 heading, About Me blurb,", () => {
    const aboutMe = screen.getByText("About Me");
    expect(aboutMe).toBeInTheDocument();

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument;
  });

  it("should have an image", () => {
    const test = screen.getAllByRole("img");
    expect(test[0]).toBeInTheDocument();
  });

  it("should have three images and three sub headings (h3)", () => {
    const test_img = screen.getAllByRole("img");
    expect(test_img).toHaveLength(3);

    const test_heading = screen.getAllByRole("heading", { level: 3 });
    expect(test_heading).toHaveLength(3);
  });

  //   it("this test should fail", () => {
  //     const test = screen.getByText("This doesn't exist");
  //     expect(test).toBeInTheDocument();
  //   });
});
