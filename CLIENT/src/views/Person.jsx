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
