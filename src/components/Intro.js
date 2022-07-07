import babyMe from "../assets/Arthur-2006.jpg";

import Pages from "./Pages";

const Intro = ({ timeline, setTimeline }) => {
  return timeline === 1 ? (
    <>
      <h1>AVANT DE SE LANCER...</h1>
      <img
        className="baby-me"
        src={babyMe}
        alt="Moi il y a une bonne quinzaine d'années"
      />
      <p>Voici une photo de votre humble serviteur.</p>
      <p>
        Alors certes, j'avais quatorze ans. Certes, vous ne voyez probablement
        pas le rapport avec le sujet qui nous occupe.
      </p>
      <p>
        Mais ce qu'il est important de souligner, c'est que déjà à cet âge là,
        j'avais un goût impeccable en matière de chemise. Et ça, on ne peut pas
        raisonnablement passer à côté.
      </p>
      <Pages
        on="OK c'est compris, on y va"
        off="Précédent"
        timeline={timeline}
        setTimeline={setTimeline}
      />
    </>
  ) : null;
};

export default Intro;
