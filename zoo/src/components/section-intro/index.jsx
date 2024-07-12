import "./intro.css";
import "./intro-small.css";
const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <h1 className="intro-title"> Le Zoo de Brocéliande</h1>
        <p className="intro-text">
          Découvrez un monde fascinant où la nature prend vie.
          <br /> Profitez d'une journée en famille ou entre amis pour explorer,
          apprendre et s'amuser dans un cadre naturel exceptionnel.
          <br /> Le Zoo de Brocéliande, c'est une aventure inoubliable pour
          petits et grands ! Venez vite nous rendre visite et plongez au cœur de
          la vie sauvage !
        </p>
        <h2 className="intro-footer">
          <i>Bienvenue à Brocéliande !</i>
        </h2>
      </div>
      <div className="intro-right">
        <img src="/image/zoo2.png" className="img-intro" alt="animaux du zoo" />
      </div>
    </div>
  );
};

export default Intro;
