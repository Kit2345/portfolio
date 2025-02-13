import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import { Page } from "../../types/common";
import ProjectsPage from "../Projects/ProjectsPage";

type MainProps = { page: Page };

function Main({ page }: MainProps) {
  switch (page) {
    case "about":
      return (
        <>
          <AboutMe />
        </>
      );
    case "contact":
      return (
        <>
          <ContactMe />
        </>
      );
    case "projects":
      return (
        <>
          <ProjectsPage />
        </>
      );
  }
}

export default Main;
