import { NavLink } from "react-router-dom";

import "../../assets/styles/scss/Footer.scss";

function Footer() {
  return (
    <footer>
      <NavLink to={"/informations-legales"} className={"link-hover"}>
        <p>Informations légales</p>
      </NavLink>
      <p>©2024 - WoWiki</p>
    </footer>
  );
}

export default Footer;
