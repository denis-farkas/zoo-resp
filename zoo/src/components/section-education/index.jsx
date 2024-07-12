import React from "react";
import "./sectioneducation.css";

const Sectioneducation = () => {
  return (
    <div className="section-education">
      <div className="title-education">
        <h1>Education</h1>
      </div>
      <div className="bloc-write-education yellow-dark ">
        <h1 className="bloc-first"> Naissance des animaux </h1>
        <div className="bloc-foto foto ">
          <img
            src="https://file1.telestar.fr/var/telestar/storage/images/media/images/2015/photos/20150422-carnet-rose/malindi-et-deux-de-ses-lionceaux/856150-1-fre-FR/Malindi-et-deux-de-ses-lionceaux.jpg?alias=exact1024x768_l&size=x100&format=jpeg"
            className="photo-lione"
            alt=""
          />
        </div>
      </div>

      <div className="bloc-write-education yellow-dark">
        <h5 className="bloc-first ">Vie animal</h5>
        <p className="bloc-para">
          les naissances en captivités suivent le rythme le reigne animal. les
          manifiéres s'occuppent de leur petit, tandis que les poissons et les
          reptiles les abandonnent. Afin d'assurer la survie de ces derniers,
          nos vétériaires et le personnel qualifié apportent toute l'aide
          nécessaire aux nouveaux nés.
        </p>
        <div className="bloc-foto foto">
          <img
            src="https://a-z-animals.com/media/2022/05/Eastern-Racer-baby-768x461.jpg"
            className="oeuf-serpent"
            alt=""
          />
        </div>
      </div>
      <div className="bloc-write-education yellow-dark">
        <h5 className="bloc-first">Nos actions</h5>
        <p className="bloc-para">
          Durant la croissance de l'animal, nous veillons à sa santé, à son
          intégration et à sa sécurité.
        </p>

        <div className="bloc-foto foto">
          <img
            src="https://www.educatel.fr/wp-content/uploads/2022/02/travailler-dans-un-zoo.jpg"
            className="photo-petitigre"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sectioneducation;
