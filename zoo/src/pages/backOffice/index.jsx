import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./backOffice.css";

const BackOffice = () => {
  const navigate = useNavigate();
  let actualUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (
      actualUser === null ||
      (actualUser.role !== "admin" && actualUser.role !== "veto")
    ) {
      navigate("/");
    }
  }, [actualUser, navigate]);

  if (actualUser !== null && actualUser.role === "admin") {
    return (
      <div className="main-table">
        <div className="center">
          <h2>Espace administration</h2>
        </div>
        <div className="jumbotron">
          <Link to={"/backUser"} aria-label="Accéder à la gestion des membres">
            <button className="btn btn-primary my-4">
              Gestion des membres
            </button>
          </Link>

          <Link
            to={"/backMessage"}
            aria-label="Accéder à la gestion des messages"
          >
            <button className="btn btn-primary my-4">
              Gestion des messages
            </button>
          </Link>
          <Link to={"/backAvis"} aria-label="Accéder à la gestion des avis">
            <button className="btn btn-primary my-4">Gestion des avis</button>
          </Link>
        </div>
      </div>
    );
  } else if (actualUser !== null && actualUser.role === "veto") {
    return (
      <div className="main-table">
        <div className="center">
          <h2>Espace vétérinaire</h2>
        </div>
        <div className="jumbotron">
          <Link
            to={"/backAnimal"}
            aria-label="Accéder à la gestion des animaux"
          >
            <button className="btn btn-primary my-4">
              Gestion des Animaux
            </button>
          </Link>
          <Link
            to={"/backMessage"}
            aria-label="Accéder à la gestion des messages"
          >
            <button className="btn btn-primary my-4">
              Gestion des messages
            </button>
          </Link>
          <Link to={"/backAvis"} aria-label="Accéder à la gestion des avis">
            <button className="btn btn-primary my-4">Gestion des avis</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default BackOffice;
