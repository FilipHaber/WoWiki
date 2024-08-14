import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toast from "../../components/Toast";
import ConfirmationToast from "../../components/ConfirmationToast";

import { useUser } from "../../hooks/UseUser";
import { useValidation } from "../../hooks/UseValidation";
import "../../assets/styles/scss/UserDashboard.scss";

const PASSWORD_REGEX =
  /^(?!.*\s)(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;

function UserDashboard() {
  const { user, disconnect } = useUser();
  const [currentPassword, setCurrentPassword, validCurrentPassword] =
    useValidation(PASSWORD_REGEX);
  const [newPassword, setNewPassword, validNewPassword] =
    useValidation(PASSWORD_REGEX);
  const [newPasswordFocus, setNewPasswordFocus] = useState(false);

  const [succes, setSucces] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [showConfirmationToast, setShowConfirmationToast] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const createdAt = user.created_at;
  const createdAtLocal = new Date(createdAt).toLocaleString();

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleCloseConfirmationToast = () => {
    setShowConfirmationToast(false);
  };

  const handleDeleteAccount = () => {
    setShowConfirmationToast(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmationToast(false);
  };

  async function deleteSubmitHandler(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:9000/api/user/${user.id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (!response.ok) {
        const responseParsed = await response.json();
        throw new Error(
          responseParsed.message ||
            "Une erreur est survenue lors de la suppression du compte."
        );
      }
      setSucces("Votre compte a été supprimé avec succès.");
      setError(null);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        disconnect();
      }, 3000);
    } catch (error) {
      setError(error.message);
      setSucces(null);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  }

  async function passwordSubmitHandler(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch(
      `http://localhost:9000/api/user/password/${user.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );
    const responseParsed = await response.json();
    form.reset();
    if (response.status === 401 || response.status === 500) {
      setError(responseParsed.message);
      setSucces("Le mot de passe actuel ne correspond pas");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return;
    }

    setSucces("Votre mot de passe à bien été changer");
    setError(null);
    setShowToast(true);

    setTimeout(() => {
      navigate("/");
    }, 5000);
  }

  return (
    <main id="dashboard">
      <section>
        <h1>Interface utilisateur</h1>
        <article className="user-info">
          <table>
            <tbody>
              <tr>
                <td>Surnom</td>
                <td>{user.nickname}</td>
              </tr>

              <tr>
                <td>Email</td>
                <td>{user.email}</td>
              </tr>

              <tr>
                <td>Mot de passe</td>
                <td>*********</td>
              </tr>

              <tr>
                <td>Compte créer le</td>
                <td>{createdAtLocal}</td>
              </tr>

              <tr>
                <td>Supprimer votre compte</td>
                <td>
                  <button onClick={handleDeleteAccount} className="delete-user">
                    Supprimer
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <article className="password-change">
          <h2>Changez votre mot de passe</h2>
          <form onSubmit={passwordSubmitHandler}>
            <label htmlFor="currentPassword">Mot de passe actuel</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              aria-label="Mot de passe actuel"
              placeholder="Mot de passe actuel"
              onChange={(e) => setCurrentPassword(e.target.value)}
              value={currentPassword}
              required
            />
            <label htmlFor="newPassword">
              Nouveau mot de passe
              <FontAwesomeIcon
                icon={faCheck}
                className={validNewPassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validNewPassword || !newPasswordFocus ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              aria-label="Nouveau mot de passe"
              placeholder="Nouveau mot de passe"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              required
              onFocus={() => setNewPasswordFocus(true)}
              onBlur={() => setNewPasswordFocus(false)}
            />
            <p
              className={
                newPasswordFocus && !validNewPassword ? "instructions" : "hide"
              }
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
              disabled={!validCurrentPassword || !validNewPassword}
              className={
                !validCurrentPassword || !validNewPassword
                  ? "button-disabled"
                  : "button-enabled"
              }
            >
              Changez le mot de passe
            </button>
          </form>
        </article>
      </section>
      {showToast && (
        <Toast
          message={error ? error : succes}
          onCloseOverlay={handleCloseToast}
        />
      )}
      {showConfirmationToast && (
        <ConfirmationToast
          message="Êtes-vous sûr de vouloir supprimer votre compte ?"
          onCloseOverlay={handleCloseConfirmationToast}
          onConfirm={deleteSubmitHandler}
          onCancel={handleCancelDelete}
        />
      )}
    </main>
  );
}

export default UserDashboard;
