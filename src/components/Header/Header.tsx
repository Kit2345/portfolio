import grass_energy from "../../assets/grass_energy_card_vector_symbol_by_biochao_dezrx3b.png";

function Header() {
  return (
    <div className="flex-row-center red-border">
      <div className="flex-row-center green-border">
        <div id="job-title" className="grey-box">
          Full-stack Developer
        </div>

        <div id="user-name" className="user-name">
          <h3>Wing-Kit Leung</h3>
        </div>
      </div>
      <div>
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
    </div>
  );
}

export default Header;
