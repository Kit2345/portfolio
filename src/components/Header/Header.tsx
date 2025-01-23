import grass_energy from "../../assets/grass_energy_card_vector_symbol_by_biochao_dezrx3b.png";

function Header() {
  return (
    <div>
      <div id="job-title">Full-stack Developer</div>
      <div id="user-name">Wing-Kit Leung</div>
      <button id="menu-button" aria-label="menu">
        menu
      </button>
      <img
        id="energy-img"
        src={grass_energy}
        alt="grass energy"
        className="energy-symbol"
      />
    </div>
  );
}

export default Header;
