import "../assets/styles/scss/Person.scss";
import useFetchPerson from "../hooks/UseFetchPerson.jsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Person() {
  const { person, isLoading, error } = useFetchPerson();
  const [filterPerson, setFilterPerson] = useState("");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const searchPerson = person.filter((item) =>
    item.person_name.toLowerCase().includes(filterPerson.toLowerCase())
  );
  return (
    <main id="person">
      <section>
        <h1>Les Classes</h1>
        <input
          type="text"
          placeholder="Rechercher une classe"
          value={filterPerson}
          onChange={(e) => setFilterPerson(e.target.value)}
          className="search-classe"
        />
        <hr />
        {searchPerson.length > 0 ? (
          searchPerson.map((item) => (
            <article key={item.id}>
              <NavLink to={`/classes/${item.id}`} className="person-card">
                <h2>{item.person_name}</h2>
                <img
                  src={`http://localhost:9000/images/${item.image}`}
                  alt={item.alt}
                />
              </NavLink>
            </article>
          ))
        ) : (
          <p>Aucune classe trouvé</p>
        )}
      </section>
    </main>
  );
}

export default Person;

// import "../assets/styles/scss/Person.scss";
// import useFetchPerson from "../hooks/UseFetchPerson.jsx";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// function Person() {
//   const { person, isLoading, error } = useFetchPerson();
//   const [searchTerm, setSearchTerm] = useState(""); // Ajout de l'état pour la recherche

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   // Filtrer les classes en fonction du terme de recherche
//   const filteredPersons = person.filter((item) =>
//     item.person_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <main id="person">
//       <section>
//         <h1>Les Classes</h1>

//         {/* Barre de recherche */}
//         <input
//           type="text"
//           placeholder="Rechercher une classe..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-bar"
//         />

//         <hr />
//         {filteredPersons.length > 0 ? (
//           filteredPersons.map((item) => (
//             <article key={item.id}>
//               <NavLink to={`/classes/${item.id}`} className="person-card">
//                 <h2>{item.person_name}</h2>
//                 <img
//                   src={`http://localhost:9000/images/${item.image}`}
//                   alt={item.alt}
//                 />
//               </NavLink>
//               <hr />
//             </article>
//           ))
//         ) : (
//           <p>Aucune classe trouvée</p>
//         )}
//       </section>
//     </main>
//   );
// }

// export default Person;
