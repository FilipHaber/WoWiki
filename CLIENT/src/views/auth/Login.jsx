import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useUser } from "../../hooks/UseUser";
import { useValidation } from "../../hooks/UseValidation";
import "../../assets/styles/scss/Auth.scss";

const EMAIL_REGEX =
  /^(?=.{1,100}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;

function Login() {
  const [email, setEmail, validEmail] = useValidation(EMAIL_REGEX);
  const [password, setPassword, validPassword] = useValidation(PASSWORD_REGEX);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const { login } = useUser();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch("http://localhost:9000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const responseParsed = await response.json();
    form.reset();
    if (response.status === 401 || response.status === 500) {
      setError(responseParsed.message);
      return;
    }

    login(responseParsed.user);
    navigate("/");
  }

  return (
    <main id="auth">
      {error && <p>{error}</p>}
      <form onSubmit={submitHandler}>
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <button
          type="submit"
          disabled={!validEmail || !validPassword}
          className={
            !validEmail || !validPassword ? "button-disabled" : "button-enabled"
          }
        >
          Connexion
        </button>
      </form>
      <NavLink to={"/register"} className={"link-hover"}>
        <p>Vous n'avez pas de compte ? Créez votre compte !</p>
      </NavLink>
    </main>
  );
}

export default Login;
