import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BackAvis = () => {
  const [avis, setAvis] = useState(null);

  useEffect(() => {
    const API_URL = "http://localhost:3001";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/api/readAvis`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setAvis(response.data.avis);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="main">
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "5%" }} aria-label="Identifiant de l'avis">
              Id
            </th>
            <th style={{ width: "15%" }} aria-label="Nom de l'avis">
              Nom
            </th>
            <th style={{ width: "15%" }} aria-label="Email de l'auteur">
              Email
            </th>
            <th style={{ width: "20%" }} aria-label="Contenu de l'avis">
              Contenu
            </th>
            <th style={{ width: "15%" }} aria-label="Date de création">
              Date
            </th>
            <th style={{ width: "15%" }} aria-label="Actions">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {avis &&
            avis.map((avis) => (
              <tr key={avis.id}>
                <td>{avis.id}</td>
                <td>{avis.name}</td>
                <td>{avis.email}</td>
                <td>{avis.content}</td>
                <td>{avis.date}</td>
                <td>
                  <Link
                    to={`/deleteOneAvis/${avis.id}`}
                    className="btn btn-danger"
                    aria-label="Effacer Avis"
                  >
                    Effacer
                  </Link>
                </td>
              </tr>
            ))}

          {avis && !avis.length && (
            <tr>
              <td>
                <p>Pas d'avis à afficher</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BackAvis;
