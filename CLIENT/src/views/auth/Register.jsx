import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Toast from "../../components/Toast";
import { useValidation } from "../../hooks/UseValidation";
import "../../assets/styles/scss/Auth.scss";

const EMAIL_REGEX =
  /^(?=.{1,100}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;

const NICKNAME_REGEX = /^[a-zA-Z0-9]{2,30}$/;

function Register() {
  const [email, setEmail, validEmail] = useValidation(EMAIL_REGEX);
  const [password, setPassword, validPassword] = useValidation(PASSWORD_REGEX);
  const [nickname, setNickname, validNickname] = useValidation(NICKNAME_REGEX);
  const [nicknameFocus, setNicknameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [succes, setSucces] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCloseToast = () => {
    setShowToast(false);
  };

  async function submitHandler(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch("http://localhost:9000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const responseParsed = await response.json();
    form.reset();
    if (
      response.status === 401 ||
      response.status === 500 ||
      response.status === 400
    ) {
      setError(responseParsed.message);
      setSucces(
        "Les informations que vous avez saisis ne sont pas bonnes ou ne respectent pas les critères du site"
      );
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return;
    }

    setSucces(
      "Votre compte a bien été créé, vous allez être redirigé vers la page de connexion"
    );
    setError(null);
    setShowToast(true);

    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }

  return (
    <main id="auth">
      {error && <p>{error}</p>}
      <form onSubmit={submitHandler}>
        <label htmlFor="nickname">
          Surnom:
          <FontAwesomeIcon
            icon={faCheck}
            className={validNickname ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validNickname || !nicknameFocus ? "hide" : "invalid"}
          />
        </label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          aria-label="Surnom"
          placeholder="Surnom"
          autoComplete="off"
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
          required
          onFocus={() => setNicknameFocus(true)}
          onBlur={() => setNicknameFocus(false)}
        />
        <p
          className={nicknameFocus && !validNickname ? "instructions" : "hide"}
        >
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          <br />
          2 Caractères minimum
          <br />
          30 Caractères maximum
          <br />
          Uniquement les lettres et les chiffres sont autorisés
        </p>
        <label htmlFor="email">
          Email:
          <FontAwesomeIcon
            icon={faCheck}
            className={validEmail ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validEmail || !emailFocus ? "hide" : "invalid"}
          />
        </label>
        <input
          type="text"
          id="email"
          name="email"
          aria-label="Email"
          placeholder="Votre email"
          autoComplete="no"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <p className={emailFocus && !validEmail ? "instructions" : "hide"}>
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          <br />
          100 Caractères maximum
          <br />
          Un email valide obligatoire
        </p>
        <label htmlFor="password">
          Mot de passe:
          <FontAwesomeIcon
            icon={faCheck}
            className={validPassword ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validPassword || !passwordFocus ? "hide" : "invalid"}
          />
        </label>
        <input
          type="password"
          id="password"
          name="password"
          aria-label="Mot de passe"
          placeholder="Votre mot de passe"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <p
          className={passwordFocus && !validPassword ? "instructions" : "hide"}
        >
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          <br />
          8 Caractères minimum
          <br />
          60 Caractères maximum
          <br />1 Majuscule, 1 chiffre, 1 caractère spécial obligatoire
        </p>
        <button
          type="submit"
          disabled={!validEmail || !validPassword || !validNickname}
          className={
            !validEmail || !validPassword || !validNickname
              ? "button-disabled"
              : "button-enabled"
          }
        >
          Créez votre compte
        </button>
      </form>
      <NavLink to={"/login"} className={"link-hover"}>
        <p>Vous avez déjà un compte ? Connectez-vous !</p>
      </NavLink>
      {showToast && (
        <Toast
          message={error ? error : succes}
          onCloseOverlay={handleCloseToast}
        />
      )}
    </main>
  );
}

export default Register;
