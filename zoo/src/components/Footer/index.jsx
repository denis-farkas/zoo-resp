import "./footer.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { userService } from "../../utils/userService";
import { useNavigate } from "react-router-dom";

const Footer = () => {
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
      <nav className="navbar navbar-expand-lg bg-beige">
        <div className="container-fluid">
          <div className="logo">
            <NavLink className="navbar-brand" to="/">
              <img
                src="logoimg.png"
                className="logo-img"
                alt="Zoo de Brocéliande"
              />
            </NavLink>
          </div>
          <div>
            <ul className="navbar-nav ">
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
                <>
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
                </>
              )}

              {/* Condition pour afficher le lien vers l'espace admin pour les utilisateurs ayant le rôle "admin" */}
              {user && user.role === "admin" && (
                <li className="nav-item">
                  <NavLink
                    to={"/backOffice"}
                    className={({ isActive }) => (isActive ? "active" : "none")}
                  >
                    Espace Admin
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
