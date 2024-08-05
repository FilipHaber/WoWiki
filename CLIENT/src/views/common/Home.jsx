import { NavLink } from "react-router-dom";

import "../../assets/styles/scss/Home.scss";
import icondh from "../../assets/images/v4.webp";
import heal from "../../assets/images/healof.webp";

function Home() {
  return (
    <main id="home">
      <section>
        <h1>
          Bienvenue sur WoWiki Votre Encyclopédie des Classes de World of
          Warcraft
        </h1>
        <p>
          WoWiki, la ressource ultime pour tout ce qui concerne les classes et
          spécialisations de World of Warcraft ! Que vous soyez un joueur
          débutant cherchant à choisir sa première classe ou un vétéran
          souhaitant approfondir ses connaissances, vous êtes au bon endroit.
          Notre site est conçu pour offrir une mine d'informations détaillées et
          à jour sur chacune des classes jouables dans le vaste univers de WoW.
        </p>
        <section>
          <h2>Communauté et Partage</h2>
          <p>
            WoWiki est plus qu'une simple base de données, c'est une communauté
            de passionés de WoW. Participez à l'information, partager des
            astuces grâce aux commentaires des classes. Nous encourageons les
            utilisateurs à contribuer à nos guides et à partager leurs propres
            expériences / remarques pour aider les autres joueurs dans l'espace
            commentaires.
          </p>
        </section>
      </section>
      <section className="section-class-spe">
        <h3>Classes et Spécialisations !</h3>
        <article>
          <h4>Classes</h4>
          <NavLink></NavLink>
          <img src={icondh} alt="" />
        </article>
        <article>
          <h4>Spécialisations</h4>
          <img src={heal} alt="" />
        </article>
      </section>
    </main>
  );
}

export default Home;
