import "./histoire.css";
import { Link } from "react-router-dom";

const Histoirezoo = () => {
  return (
    <div className="body-first">
      <div className="container-histoire">
        <div className="text">
          <h1 className="title-histo">Le zoo de Brocéliande</h1>
          <p className="intro-histoire">
            Notre zoo écologique est dédié à la conservation des espèces et à la
            protection de l'environnement. Nous abritons une grande variété
            d'animaux dans des habitats naturels recréés pour leur bien-être.
            Venez découvrir nos initiatives durables et nos programmes éducatifs
            pour sensibiliser le public à la préservation de la biodiversité.
          </p>
        </div>
        <div className="photo">
          <img
            src="https://bloximages.chicago2.vip.townnews.com/dailytimes.com/content/tncms/assets/v3/editorial/f/a0/fa013fac-9526-11e7-9dfd-a7547efcb63a/59b3884a9a586.image.jpg?resize=1200%2C1413"
            alt=""
          ></img>
        </div>
      </div>

      <div className="body-third">
        <section>
          <div className="container-horaire">
            <div className="text-horaire">
              <h1 className="horaires">Horaires d'ouverture</h1>

              <p className="horaire-tableau">
                <table className="horaire-table">
                  <thead>
                    <tr>
                      <th scope="col">0</th>
                      <th scope="col">Mois</th>
                      <th scope="col">Ouverture</th>
                      <th scope="col">Fermeture</th>
                      <th scope="col">Observations</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    <tr>
                      <th scope="row">1</th>
                      <td>Janvier</td>
                      <td>09H00</td>
                      <td>20h00</td>
                      <td>Fermé le jour de l'An</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Février</td>
                      <td>09H00</td>
                      <td>20H00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Mars</td>
                      <td>09H00</td>
                      <td>20H00</td>
                      <td>Passage à l'heure d'été</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Avril</td>
                      <td>09H00</td>
                      <td>20h00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Mai</td>
                      <td>09H00</td>
                      <td>20h00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Juin</td>
                      <td>09H00</td>
                      <td>20h00</td>
                      <td>Fêtons l'été le 21</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Juillet</td>
                      <td>09H00</td>
                      <td>20h00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Août</td>
                      <td>09H00</td>
                      <td>20h00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Septembre</td>
                      <td>09H00</td>
                      <td>20h00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Octobre</td>
                      <td>09H00</td>
                      <td>20h00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Novembre</td>
                      <td>09H00</td>
                      <td>20h00</td>
                      <td>Passage à l heure d'hiver</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>Décembre</td>
                      <td>09H00</td>
                      <td>20h00</td>
                      <td>Fermé le jour de Noêl</td>
                    </tr>
                  </tbody>
                </table>
              </p>

              <h1 className="horaire-video">La video</h1>
              <a href="https://youtu.be/v8R_QTOgCi0?t=3">
                {" "}
                <img
                  src="https://youtu.be/v8R_QTOgCi0?t=3"
                  className="video-zoo"
                  alt=""
                />{" "}
                Zoo de Brocéliande
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Histoirezoo;
