import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useUser } from "../hooks/UseUser";
import "../assets/styles/scss/Banned.scss";

function Banned() {
  const { user, logout } = useUser();
  return (
    <main id="banned">
      <section>
        <h1>{user.nickname} Votre compte a été suspendu</h1>
        <FontAwesomeIcon icon={faLock} size={"2x"} />
        <p>
          Si vous souhaitez connaître la raison et/ou la contester, adressez
          nous un mail à : "wowiki@contact.fr" avec l'adresse mail du compte
          suspendu.
        </p>
      </section>
    </main>
  );
}

export default Banned;
