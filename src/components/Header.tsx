import grass_energy from "../assets/grass_energy_card_vector_symbol_by_biochao_dezrx3b.png";

function Header() {
  return (
    <div>
      <div>Full-stack developer</div>
      <div>Wing-Kit Leung</div>
      <button aria-label="menu">menu</button>
      <img src={grass_energy} alt="Grass Energy" className="energy-symbol" />
    </div>
  );
}

export default Header;
