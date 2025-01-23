import crown_rarity_image from "../../assets/crown-rarity-symbol.png";

function Footer() {
  return (
    <div>
      <button aria-label="about me">About Me</button>
      <button aria-label="projects">Projects</button>
      <button aria-label="contact me">Contact Me</button>
      <img src={crown_rarity_image} alt="crown rarity symbol" />
      <p>
        Full-stack software developer with extensive problem solving experience
        as a former academic research scientist
      </p>
    </div>
  );
}

export default Footer;
