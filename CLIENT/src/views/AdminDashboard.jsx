import { useState } from "react";

import useFetchAlerts from "../hooks/UseFetchAlerts";
import useFetchUsers from "../hooks/UseFetchUsers";
import "../assets/styles/scss/AdminDashboard.scss";
import Toast from "../components/Toast";

function AdminDashboard() {
  const { alerts, isLoading, alertsError, refetch } = useFetchAlerts();
  const { users, usersIsLoading, usersError, refetchUsers } = useFetchUsers();

  const [error, setError] = useState(null);
  const [succes, setSucces] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [filterUsers, setFilterUsers] = useState("");

  const searchUser = users.filter((user) =>
    user.nickname.toLowerCase().includes(filterUsers.toLowerCase())
  );

  const handleCloseToast = () => {
    setShowToast(false);
  };

  async function deleteAlertHandler(alertId) {
    try {
      const response = await fetch(
        `http://localhost:9000/api/alert/${alertId}`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );
      if (!response.ok) {
        const responseParsed = await response.json();
        throw new Error(
          responseParsed.message ||
            "Une erreur est survenue lors du traitement du signalement."
        );
      }

      refetch();

      setSucces("Le signalement à été traité");
      setError(null);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
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

  async function banUserHandler(e, userId) {
    e.preventDefault();

    const status = e.target.status.value === "autorisé" ? 0 : 1;
    const role = e.target.role.value === "utilisateur" ? 1 : 2;

    const data = {
      status: status,
      role_id: role,
    };

    try {
      const response = await fetch(`http://localhost:9000/api/user/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!response.ok) {
        const responseParsed = await response.json();
        throw new Error(
          responseParsed.message ||
            "Une erreur est survenue lors du changement des propriétés de l'utilisateur."
        );
      }

      refetchUsers();

      const result = await response.json();
      setSucces(result.msg);
      setError(null);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
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

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (alertsError) {
    return <p>Erreur : {alertsError}</p>;
  }

  if (usersIsLoading) {
    return <p>Chargement...</p>;
  }

  if (usersError) {
    return <p>Erreur : {usersError}</p>;
  }

  return (
    <main id="dashboard-admin">
      <section>
        <h1>Tableau de bord Administrateur</h1>
        <section className="alerts-section">
          <h2>Les commentaires signalés</h2>
          {alerts.length > 0 ? (
            alerts.map((item) => {
              const alertDate = new Date(item.alert_date).toLocaleDateString();

              const commentDate = new Date(
                item.comment_publish_date
              ).toLocaleDateString();

              return (
                <article key={item.id} className="alert-article">
                  <h3>Signalement nr° {item.id}</h3>
                  <table>
                    <tbody>
                      <tr>
                        <td>Qui a fait le signalement</td>
                        <td>{item.alerting_user_nickname}</td>
                      </tr>
                      <tr>
                        <td>Qui est signalé</td>
                        <td>{item.comment_from_user_nickname}</td>
                      </tr>
                      <tr>
                        <td>Date du signalement</td>
                        <td>{alertDate}</td>
                      </tr>
                      <tr>
                        <td>Commentaire publié le</td>
                        <td>{commentDate}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="comment">
                    Contenu du commentaire : <br />
                    {item.comment_content}
                  </p>
                  <button onClick={() => deleteAlertHandler(item.id)}>
                    Traiter le signalement
                  </button>
                </article>
              );
            })
          ) : (
            <p className="no-comment">Aucun commentaire signalé</p>
          )}
        </section>
        <section className="users-section">
          <h4>Les utilisateurs du site</h4>
          <input
            type="text"
            placeholder="Rechercher un utilisateur"
            value={filterUsers}
            onChange={(e) => setFilterUsers(e.target.value)}
            className="search-user"
          />
          {searchUser.length > 0 ? (
            searchUser.map((user) => {
              const userStatus = user.status === 0 ? "autorisé" : "banni";

              const userRole =
                user.role_id === 1
                  ? "utilisateur"
                  : user.role_id === 2
                  ? "administrateur"
                  : "aucun";
              return (
                <article key={user.id} className="user-article">
                  <p>Surnom : {user.nickname}</p>
                  <p>Email : {user.email}</p>
                  <p>Statut : {userStatus}</p>
                  <p>Rôle : {userRole}</p>
                  <p className="margin-top-bot">
                    Changer le statut ou le rôle de l'utilisateur
                  </p>
                  <form onSubmit={(e) => banUserHandler(e, user.id)}>
                    <label htmlFor="status">Choisir un statut :</label>

                    <select id="status" name="status" defaultValue={userStatus}>
                      <option value="autorisé">Autorisé</option>
                      <option value="banni">Banni</option>
                    </select>

                    <label htmlFor="role">Choisir un rôle :</label>
                    <select id="role" name="role" defaultValue={userRole}>
                      <option value="utilisateur">Utilisateur</option>
                      <option value="administrateur">Administrateur</option>
                    </select>

                    <button type="submit">Valider</button>
                  </form>
                </article>
              );
            })
          ) : (
            <p>Aucun utilisateur trouvé</p>
          )}
        </section>
      </section>
      {showToast && (
        <Toast
          message={error ? error : succes}
          onCloseOverlay={handleCloseToast}
        />
      )}
    </main>
  );
}

export default AdminDashboard;
