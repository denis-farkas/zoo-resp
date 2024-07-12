import React from "react";
import "./soigneur.css";
import { Link } from "react-router-dom";

const Soigneur = () => {
  return (
    <body className="first-soigneur">
      <div className="container-soigneur">
        <div className="text-soigneur">
          <h1 className="title-soigneur">Le soigneur animalier</h1>
          <p className="intro-soigneur">
            Le métier de soigneur animalier fait rêver un très grand nombre de
            visiteurs, petits et grands. Mais connait-on réellement ce métier ?
            En quoi consiste le travail, quelles sont les compétences requises
            et les formations permettant d’acquérir cette qualification ? Lors
            de cette journée d’information, venez échanger avec des
            professionnels. Les soigneurs du zoo, ainsi qu’un formateur de la
            maison familiale rurale de Brocéliande seront à votre disposition
            pour répondre à toutes vos questions.
          </p>

          <p className="journee-soigneur">
            Voici le programme (participation gratuite sous réserve de
            s’acquitter du droit d’entrée / sans réservation):
            <ul>
              <li>
                Stand « Formations soigneur animalier » avec Mr Charles Attend,
                responsable de l’option « Sensibilisation au métier de soigneur
                en parc zoologique » à la maison familiale rurale de Brocéliande
                : 10h00-12h00 / 14h00-15h00 / 16h00-17h00
              </li>

              <li>
                Temps de rencontres avec un soigneur animalier du zoo de
                Brocéliande 11h00 et 15h30 : manchots Empereur
              </li>
              <li>
                Temps d’échanges sur les formations et le métier de soigner
                animalier : avec Mr Bulteau et des soigneurs animaliers : 15h00
              </li>
            </ul>
            <ul>
              Nourrissages des animaux
              <li>10h30 : Fennec </li>
              <li>11h30 : Tigre </li>
              <li>14h30 : Giraphe </li>
              <li>16h00 : Hippopotane</li>
            </ul>
          </p>
        </div>

        <div className="photo-soigneur">
          <img
            src="https://th.bing.com/th/id/R.ee5996b4b8408735337e47c7b343be6e?rik=BdFlwIJT1Dcy2A&riu=http%3a%2f%2fwww.sosveterinaires.be%2fwp-content%2fuploads%2f2015%2f03%2fzoo1-soigneur.jpg&ehk=Pn%2brzS%2bxAY7zM%2f3u5EZA9bboZlmpAdkWmb2n0ltpQO0%3d&risl=&pid=ImgRaw&r=0"
            className="photo-soigneur1"
            alt=""
          ></img>

          <button type="button" className="btn btn-success">
            Animaux
          </button>
          <button type="button" className="btn btn-success">
            Actualite
          </button>
          <button type="button" className="btn btn-success">
            Bienvenue
          </button>
          <button type="button" className="btn btn-success">
            Naissance
          </button>
          <button type="button" className="btn btn-success">
            Information
          </button>
          <button type="button" className="btn btn-link">
            Accueil
          </button>
        </div>
      </div>
    </body>
  );
};
export default Soigneur;
