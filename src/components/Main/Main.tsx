import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import { Page } from "../../types/common";

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
  }
}

export default Main;
