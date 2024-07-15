import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ViewAnimal from "../../components/viewAnimal";

const BackAnimal = () => {
  const [animaux, setAnimaux] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  let actualUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  if (
    actualUser === null ||
    actualUser.role !== "admin" ||
    actualUser.role !== "veto"
  ) {
    navigate("/");
  }

  const handleRowClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const closeAnimal = () => {
    setSelectedAnimal(null);
  };

  useEffect(() => {
    const API_URL = "http://localhost:3001";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/api/readAnimaux`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setAnimaux(response.data.animaux);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="main-table">
      <div className="display-animal my-5">
        {selectedAnimal && (
          <ViewAnimal animal={selectedAnimal} closeAnimal={closeAnimal} />
        )}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "5%" }} aria-label="Identifiant de l'animal">
              Id
            </th>
            <th style={{ width: "15%" }} aria-label="Nom de l'animal">
              Nom
            </th>
            <th style={{ width: "15%" }} aria-label="Email de l'auteur">
              Santé
            </th>
            <th style={{ width: "20%" }} aria-label="Contenu de l'animal">
              Soins
            </th>
            <th style={{ width: "15%" }} aria-label="Date de création">
              Alim.
            </th>
            <th style={{ width: "15%" }} aria-label="Actions">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {animaux &&
            animaux.map((animal) => (
              <tr key={animal.ID_animaux}>
                <td>{animal.ID_animaux}</td>
                <td>{animal.TITLE}</td>
                <td>{animal.SANTE}</td>
                <td>{animal.SOIN}</td>
                <td>{animal.alim}</td>
                <td>
                  <button
                    className="btn btn-success mx-1"
                    key={animal.ID_animaux + animal.name}
                    onClick={() => handleRowClick(animal)}
                  >
                    Voir
                  </button>
                  <Link
                    to={`/editAnimal/${animal.ID_animaux}`}
                    className="btn btn-danger"
                    aria-label="Modifier Animal"
                  >
                    Modifier
                  </Link>
                </td>
              </tr>
            ))}

          {animaux && !animaux.length && (
            <tr>
              <td>
                <p>Pas d'animal à afficher</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BackAnimal;
