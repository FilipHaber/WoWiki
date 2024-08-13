// import { useState, useEffect } from "react";
// import { useUser } from "../../hooks/UseUser";
// import "../../assets/styles/scss/UserDashboard.scss";

// const UserDashboard = () => {
//   const { user } = useUser();
//   const [infoUser, setInfoUser] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   console.log(user);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:9000/api/user/${user.id}`
//         );
//         if (!response) throw new Error("Network response was not ok");
//         const data = await response.json();
//         setInfoUser(data.response[0]);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//         console.log("info user:", infoUser);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <main id="dashboard">
//       <section>
//         <h1>Interface utilisateur</h1>
//         <article className="user-info">
//           <table>
//             <tbody>
//               <tr>
//                 <td>Surnom</td>
//                 <td>{infoUser.nickname}</td>
//               </tr>
//               <tr>
//                 <td>Email</td>
//                 <td>{infoUser.email}</td>
//               </tr>
//               <tr>
//                 <td>Mot de passe</td>
//                 <td>*********</td>
//               </tr>
//             </tbody>
//           </table>
//         </article>
//         <article>
//           <h2>Changer votre mot de passe</h2>
//           <input type="text" placeholder="Votre mot de passe actuel" />
//           <input type="text" placeholder="Votre nouveau mot de passe" />
//         </article>
//       </section>
//     </main>
//   );
// };

// export default UserDashboard;

import { useState } from "react";
import { useUser } from "../../hooks/UseUser";
import "../../assets/styles/scss/UserDashboard.scss";

function UserDashboard() {
  const [error, setError] = useState(null);
  const { user } = useUser();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function submitHandler(e) {
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
      return;
    }

    login(responseParsed.user);
    navigate("/");
  }

  return (
    <main id="dashboard">
      {error && <p>{error}</p>}
      <form onSubmit={submitHandler}>
        <label htmlFor="currentPassword">Email:</label>
        <input
          type="text"
          id="currentPassword"
          name="currentPassword"
          aria-label="currentPassword"
          placeholder="Votre currentPassword"
          onChange={(e) => setCurrentPassword(e.target.value)}
          value={currentPassword}
          required
        />
        <label htmlFor="newPassword">Mot de passe:</label>
        <input
          type="text"
          id="newPassword"
          name="newPassword"
          aria-label="Mot newPassword"
          placeholder="Votre mot newPassword"
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          required
        />
        <button type="submit">Connexion</button>
      </form>
    </main>
  );
}

export default UserDashboard;
