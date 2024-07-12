import { Link } from "react-router-dom";
import "./backOffice.css";

const BackOffice = () => {
  return (
    <div className="main">
      <div className="jumbotron">
        <Link to={"/backUser"} aria-label="Accéder à la gestion des membres">
          <button className="button back">Gestion des membres</button>
        </Link>
        <Link to={"/signUp"} aria-label="Créer un nouveau membre">
          <button className="button back">Créer un membre</button>
        </Link>
      </div>
    </div>
  );
};

export default BackOffice;
