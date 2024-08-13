import "../assets/styles/scss/PersonById.scss";
import useFetchPersonById from "../hooks/UseFetchPersonById.jsx";

function PersonById() {
  const { person, isLoading, error } = useFetchPersonById();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(person);

  const personWithSpecs = {
    id: person[0].id,
    person_name: person[0].person_name,
    person_image: person[0].person_image,
    person_alt: person[0].person_alt,
    person_description: person[0].person_description,
    specializations: person.map((item) => ({
      specialization_name: item.specialization_name,
      specialization_description: item.specialization_description,
      specialization_image: item.specialization_image,
      specialization_alt: item.specialization_image,
      important_skills: item.important_skills,
      skill1: item.skill1,
      skill2: item.skill2,
    })),
  };
  return (
    <main id="personbyid">
      <section className="personbyid-card">
        <h1>{personWithSpecs.person_name}</h1>
        <img
          src={`http://localhost:9000/images/${personWithSpecs.person_image}`}
          alt={personWithSpecs.person_alt}
          className="classe-img"
        />
        <p>{personWithSpecs.person_description}</p>

        {personWithSpecs.specializations.map((spec, index) => (
          <article className="specs" key={index}>
            <h2>{spec.specialization_name}</h2>

            <img
              src={`http://localhost:9000/images/${spec.specialization_image}`}
              alt={spec.specialization_alt}
              className="spec-img"
            />

            <p>{spec.specialization_description}</p>
            <h3>{spec.important_skills}</h3>
            <p>
              {spec.skill1} <br />
              {spec.skill2}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default PersonById;
