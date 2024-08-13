import "../assets/styles/scss/Tdh.scss";
import useFetchTdh from "../hooks/UseFetchTdh.jsx";

function Tdh() {
  const { tdh, isLoading, error } = useFetchTdh();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main id="tdh">
      <section>
        <h1>Les Spécialisations</h1>
        <p>
          Dans le jeu World of Warcraft, les spécialisations (ou "spécs")
          désignent les rôles distincts que les personnages peuvent adopter dans
          les combats, que ce soit en PvE (joueur contre environnement) ou en
          PvP (joueur contre joueur). Chaque classe de personnage dispose de
          plusieurs spécialisations possibles, chacune offrant un style de jeu
          unique et des compétences spécifiques. Les spécialisations sont
          généralement regroupées en trois catégories principales :
        </p>
        <hr />
        {tdh.length > 0 ? (
          tdh.map((item) => (
            <div key={item.id}>
              <article className="tdh-card">
                <h2>{item.tdh_name}</h2>
                <img
                  src={`http://localhost:9000/images/${item.image}`}
                  alt={item.alt}
                />
                <p>{item.description}</p>
              </article>
              <hr className="tdh-hr" />
            </div>
          ))
        ) : (
          <p>Aucune spécialisation trouvé</p>
        )}
        <p>
          Chaque spécialisation apporte une profondeur stratégique au jeu,
          permettant aux joueurs de choisir le rôle qui correspond le mieux à
          leur style de jeu préféré, tout en collaborant efficacement avec les
          autres membres de leur équipe pour surmonter les défis du jeu. Les
          spécialisations offrent ainsi une diversité de gameplay et contribuent
          à la richesse de l'expérience de World of Warcraft.
        </p>
      </section>
    </main>
  );
}

export default Tdh;
