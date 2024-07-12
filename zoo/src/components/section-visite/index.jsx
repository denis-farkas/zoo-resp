import React from "react";
import "./sectionvisite.css";

const Sectionvisite = () => {
  return (
    <div className="visite-service">
      <div className="bloc-text grey">
        <h1 className="bloc-title-visite-guidee"> Visite guidées.</h1>
        <p className="bloc-para-visite-guidee">
          Lors de votre inscription à l'entrée du zoo, différents objets vous
          seront remis. Les horaires sont les suivants:
        </p>
        <div className="bloc-horaire-visite">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Départ</th>
                <th scope="col">Arrivée</th>
                <th scope="col">Récompense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>10h00</td>
                <td>11h00</td>
                <td>11h15</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>13h00</td>
                <td>14h00</td>
                <td>14h15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bloc-img img-one ">
        <div className="bloc-text grey">
          <h5 className="bloc-right-sup-title">Suivez le guide!</h5>
          <p className="bloc-right-sup-para">
            Vous allez vivre une fabuleuse aventure!
          </p>
          <img
            src="https://cdn-s-www.lalsace.fr/images/76FB0573-7EFF-45F9-BF59-06279CBFB802/NW_raw/l-okapi-est-un-animal-rare-que-les-enfants-ont-eu-l-occasion-de-decouvrir-photo-dna-aicha-debouza-1562343526.jpg"
            alt="flag"
          />
        </div>
      </div>
      <div className="bloc-text grey">
        <h5 className="bloc-right-sup-title">Rugissement!!!!</h5>
        <p className="bloc-right-sup-para">Le roi des animaux s'exprime!</p>
        <div className="bloc-img img">
          <img
            src="https://th.bing.com/th/id/R.9cc2f81633018ea0e1d6c863b69f4079?rik=cyN0RDW40lXTMw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-SF_2xzIY4xY%2fUAWKgEy8pyI%2fAAAAAAAAEbw%2fXTiIOUC8EK8%2fs1600%2flions-roaring-1.JPG&ehk=uyHbqxHH4RK3fzfo%2fC7a7JuRLfYRoGYqp%2bSI4LPF3Z4%3d&risl=&pid=ImgRaw&r=0"
            className="rugissement-lion"
            alt=""
          />
        </div>
      </div>
      <div className="bloc-text grey">
        <h5 className="bloc-right-sup-title">Ecouter les animaux</h5>
        <p className="bloc-right-sup-para">
          Essayez de deviner quel animal vous entendez.
        </p>
        <div className="bloc-img ">
          <img
            src="https://www.palouma.fr/wp-content/uploads/2022/08/casque-audio-enfant-28.jpg"
            alt="casque-audio"
          />
        </div>
      </div>
      <div className="bloc-text grey">
        <h5 className="bloc-title-identification-animaux">
          Identifier les animaux
        </h5>
        <p className="bloc-text">
          Identifier les à l'aide d'un cahier et d'un crayon.
        </p>

        <div className="bloc-img img">
          <img
            src="data:image/png;base64,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"
            className="bloc-cahier-crayon"
            alt=""
          />
        </div>
      </div>

      <div className="bloc-text grey">
        <h5 className="bloc-right-sup-title">Dessiner</h5>
        <p className="bloc-right-sup-para">
          Vous voila en train de dessiner un animal du zoo.
        </p>
        <div className="bloc-img img">
          <img
            src="https://img.freepik.com/premium-photo/young-talented-boy-artist-painter-kids-painting-with-paints-color-brush-park-outdoor_265223-43320.jpg"
            className="dessiner-animal"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sectionvisite;
