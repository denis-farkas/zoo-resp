import "./header.css";
import "./header-small.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { userService } from "../../utils/userService";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // Utilisation de l'état local pour stocker les informations de l'utilisateur
  const [user, setUser] = useState(null);

  // Utilisation du hook useNavigate pour la navigation dans l'application React Router
  const navigate = useNavigate();
  userService.setNavigate(navigate);

  // Fonction de déconnexion de l'utilisateur
  const logout = () => {
    userService.logout();
  };

  // Utilisation du hook useEffect pour souscrire aux changements de l'utilisateur
  useEffect(() => {
    // Abonnement aux mises à jour de l'utilisateur à l'aide du service userService
    const subscription = userService.user.subscribe((x) => setUser(x));

    // Nettoyage de l'abonnement lors de la destruction du composant
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-brown">
        <div className="container-fluid">
          <div className="logo">
            <NavLink className="navbar-brand" to="/">
              <img
                src="logoimg.png"
                className="logo-img"
                alt="Zoo de Brocéliande"
              />
              <span className="logo-title">ZOO DE BROCELIANDE</span>
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Accueil
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink className="nav-link" to="/habitats">
                  Habitats
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/prestation">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/avis">
                  Avis
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {/* Affichage conditionnel du bouton de déconnexion ou des liens de connexion/inscription */}
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to={"/userProfile"}
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      role="menuitem"
                    >
                      Mon compte
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      onClick={logout}
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      role="menuitem"
                    >
                      Se déconnecter
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink
                    to={"/signIn"}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    role="menuitem"
                  >
                    Connexion
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                {/* Condition pour afficher le lien vers l'espace admin pour les utilisateurs ayant le rôle "admin" */}
                {user && user.role === "admin" && (
                  <NavLink
                    to={"/backOffice"}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Espace Admin
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
