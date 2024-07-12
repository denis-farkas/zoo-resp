import React from "react";
import "./section-conservation.css";
const Sectionconservation = () => {
  return (
    <div className="conservation-animaux">
      <div className="title-education"><h1>Conservation</h1> </div>
      <div className="bloc-ecriture yellow-dark ">
        <h1 className="bloc-titre"> Programme de conservation des animaux </h1>
        <div className="bloc-picture picture ">
          <img
            src="https://www.lilo.org/wp-content/uploads/2020/05/LPC-Sauvegarde-des-Animaux-2020.jpg"
            className="photo-conservation"
            alt=""
          />
        </div>
      </div>

      <div className="bloc-ecriture yellow-dark">
        <h5 className="bloc-titre ">Identifier</h5>
        <p className="bloc-paragraphe ">
          De nombreuses espèces vivantes sont choyées au sein de notre zoo, dont
          certaines sont menacées d’extinction. Les connaissez-vous ? Venez
          découvrir la place qu'elles occupent dans la nature, leurs fragilités
          et comment nous contribuons à leur préservation.
        </p>
        <div className="bloc-picture picture">
          <img
            src="https://www.cours-animalia.com/images/blog/metier-soigneur-animalier-3.jpg"
            className="photo-biberon"
            alt=""
          />
        </div>
      </div>
      <div className="bloc-ecriture yellow-dark">
        <h5 className="bloc-titre ">Surveiller</h5>
        <p className="bloc-paragraphe">
          En attendant que l'espèce animale prenne ses repères et se familiarise
          avec les autres animaux, nous le surveillons et intervenons en cas de
          conflits.
        </p>

        <div className="bloc-picture picture">
          <img
            src="https://c402277.ssl.cf1.rackcdn.com/photos/10309/images/hero_small/MID_295808.jpg?1446498370"
            className="photo-intervention"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sectionconservation;
