import { useUser } from "../../hooks/UseUser";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";

import "../../assets/styles/scss/Header.scss";
import Logo from "../../assets/images/Logo.png";
import UseMenu from "../../hooks/UseMenu";

function Header() {
  const { user, logout } = useUser();
  const { isMenuOpen, toggleMenu } = UseMenu();

  return (
    <header>
      {isMenuOpen && <div className="header-overlay" onClick={toggleMenu} />}
      <button onClick={toggleMenu} className="fabars link-hover">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      <NavLink to={"/"}>
        <img src={Logo} alt="Logo de wowiki" />
      </NavLink>

      <nav className="user-nav">
        {user.isLogged ? (
          <NavLink to={"/dashboard"} className={"user link-hover"}>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </NavLink>
        ) : (
          <NavLink to={"/login"} className={"user link-hover"}>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </NavLink>
        )}
      </nav>

      <nav className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
        <button className={"bar-nav"} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {user.isLogged ? (
          <button onClick={logout} className={"bar-nav"}>
            Déconnexion
          </button>
        ) : (
          <NavLink to={"/login"} className={"bar-nav"}>
            <p onClick={toggleMenu}>Se connecter</p>
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
