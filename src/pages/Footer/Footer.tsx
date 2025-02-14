import crown_rarity_image from "../../assets/crown-rarity-symbol.png";
import { Page } from "../../types/common";
import Button from "../../components/button";

type onButtonClick = (page: Page) => void;

interface FooterProps {
  onButtonClick: onButtonClick;
}

function Footer({ onButtonClick }: FooterProps) {
  return (
    <div>
      <Button
        label="About Me"
        ariaLabel="about me"
        onClick={() => onButtonClick("about")}
      />
      <Button
        label="Projects"
        ariaLabel="projects"
        onClick={() => onButtonClick("projects")}
      />
      <Button
        label="Contact Me"
        ariaLabel="contact me"
        onClick={() => onButtonClick("contact")}
      />
      <img src={crown_rarity_image} alt="crown rarity symbol" />
      <p>
        Full-stack software developer with extensive problem solving experience
        as a former academic research scientist
      </p>
    </div>
  );
}

export default Footer;
