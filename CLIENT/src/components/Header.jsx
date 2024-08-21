import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../hooks/UseUser";

import "../assets/styles/scss/Header.scss";
import Logo from "../assets/images/Logo.webp";
import UseMenu from "../hooks/UseMenu";

function Header() {
  const { user, logout } = useUser();
  const { isMenuOpen, toggleMenu } = UseMenu();

  return (
    <header>
      {isMenuOpen && <div className="header-overlay" onClick={toggleMenu} />}
      <button onClick={toggleMenu} className="fabars link-hover">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      <NavLink to="/">
        <img src={Logo} alt="Logo de wowiki" />
      </NavLink>

      <nav className="user-nav">
        {user.isLogged ? (
          <NavLink to="/dashboard" className={"user link-hover"}>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </NavLink>
        ) : (
          <NavLink to="/login" className={"user link-hover"}>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </NavLink>
        )}
      </nav>

      <nav className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="bar-nav" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <NavLink to="/" className="bar-nav" onClick={toggleMenu}>
          Accueil
        </NavLink>

        <NavLink to="/classes" className="bar-nav" onClick={toggleMenu}>
          Classes
        </NavLink>

        <NavLink to="/specialisations" className="bar-nav" onClick={toggleMenu}>
          Spécialisations
        </NavLink>

        {user.isLogged && (
          <NavLink to="/dashboard" className="bar-nav" onClick={toggleMenu}>
            Mon compte
          </NavLink>
        )}

        {user.isAdmin === 2 && (
          <NavLink
            to="/dashboard-admin"
            className="bar-nav"
            onClick={toggleMenu}
          >
            Administrateur
          </NavLink>
        )}

        {user.isLogged ? (
          <button onClick={logout} className="bar-nav">
            Déconnexion
          </button>
        ) : (
          <NavLink to="/login" className="bar-nav" onClick={toggleMenu}>
            Se connecter
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
