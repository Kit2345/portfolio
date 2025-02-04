import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";

type MainProps = { page: "about" | "contact" };

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
