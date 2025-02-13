import crown_rarity_image from "../../assets/crown-rarity-symbol.png";
import { Page } from "../../types/common";

type onButtonClick = (page: Page) => void;

interface FooterProps {
  onButtonClick: onButtonClick;
}

function Footer({ onButtonClick }: FooterProps) {
  return (
    <div>
      <button aria-label="about me" onClick={() => onButtonClick("about")}>
        About Me
      </button>
      <button aria-label="projects" onClick={() => onButtonClick("projects")}>
        Projects
      </button>
      <button aria-label="contact me" onClick={() => onButtonClick("contact")}>
        Contact Me
      </button>
      <img src={crown_rarity_image} alt="crown rarity symbol" />
      <p>
        Full-stack software developer with extensive problem solving experience
        as a former academic research scientist
      </p>
    </div>
  );
}

export default Footer;
