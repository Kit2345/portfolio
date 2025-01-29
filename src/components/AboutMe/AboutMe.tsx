import colourlessEnergy from "../../assets/colorless_energy_card_vector_symbol_by_biochao_dezrwzj.png";
import grassEnergy from "../../assets/grass_energy_card_vector_symbol_by_biochao_dezrx3b.png";

function AboutMe() {
  return (
    <>
      <div>
        <h1>About Me</h1>
      </div>
      <div>
        <img
          src={colourlessEnergy}
          alt="colourless energy"
          className="energy-symbol"
        />
        <h3>Background:</h3>
        <p>
          I'm a former academic scientist in cancer research and now looking to
          transition to become a software developer. As a scientist I have
          experience in problem solving and computational thinking, meticulous
          attention to detail, team working and collaboration, need for
          documentation and communication and above all a love of technology and
          continuous learning.
        </p>
        <p>
          During this career I have been fortunate to be involved in many
          published peer reviewed publications, generate robust high-quality
          genomic data for other scientists, and implement new workflows using
          the latest technology. It has been been a successful and forfilling
          career advancing our knowledge of cancer, but now its time for a
          change.
        </p>
      </div>
      <div>
        <img src={grassEnergy} alt="grass energy" className="energy-symbol" />
        <h3>Why coding?</h3>
        <p>
          While I was working in a world Part of my role was to collaborate with
          our software developer to automate and improve our lab inventory
          management system. Over time I found I was enjoying this more than my
          day job, and wished I could code and do more of it. I loved the
          process of building something, the speed of delivery, and the ability
          for immediate impact and rapid feedback.
        </p>
        <p>
          I decided to make the jump, and enrolled on the School of Code (SoC)
          bootcamp in September 2023. I have now completed this, and have been
          working on my own personal projects, some solo, some with friends I
          meet during my time at SoC. I made this website to showcase some of
          these projects.
        </p>
      </div>
      <div>
        <img src={grassEnergy} alt="grass energy" className="energy-symbol" />
        <h3>What do I enjoy outside work?</h3>
        <p>
          I took up sewing a few years ago, I find it relaxing and gives me a
          creative outlet. I love the iteration of make a mockup, identify
          problems, research solutions, and then make another attempt. I'm
          currently on my third pair of trousers, and each atttempt is an
          improvement and wearable.{" "}
        </p>
        <p>
          I play video games and boardgames especially strategy and RPGs. I'm
          currently playing a lot of Wingspan, Hearthstone and Fire Emblem.{" "}
        </p>
        <p>
          I gained a love of travel when I visited South Africa with friends. It
          was amazing seeing the different cultures, exploring new places, and
          tasting the local food.{" "}
        </p>
      </div>
    </>
  );
}

export default AboutMe;
