import { Link } from "react-router-dom";
import "./backOffice.css";

const BackOffice = () => {
  return (
    <div className="main-table">
      <div className="center">
        <h2>Espace administration</h2>
      </div>
      <div className="jumbotron">
        <Link to={"/backUser"} aria-label="Accéder à la gestion des membres">
          <button className="btn btn-primary my-4">Gestion des membres</button>
        </Link>

        <Link
          to={"/backMessage"}
          aria-label="Accéder à la gestion des messages"
        >
          <button className="btn btn-primary my-4">Gestion des messages</button>
        </Link>
        <Link to={"/backAvis"} aria-label="Accéder à la gestion des avis">
          <button className="btn btn-primary my-4">Gestion des avis</button>
        </Link>
      </div>
    </div>
  );
};

export default BackOffice;
