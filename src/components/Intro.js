import shirts from "../assets/shirts.jpg";

import Pages from "./Pages";

const Intro = ({ timeline, setTimeline }) => {
  return timeline === 1 ? (
    <>
      <h1>AVANT DE SE LANCER...</h1>
      <img
        className="shirts"
        src={shirts}
        alt="Moi il y a une bonne quinzaine d'années"
      />
      <p>Voici une photo de votre humble serviteur.</p>
      <p>
        Vous ne voyez probablement pas le rapport avec le sujet qui nous occupe.
      </p>
      <p>
        Mais ce qu'il est important de souligner, c'est que j'ai un goût
        impeccable en matière de chemise. Et ça, on ne peut pas raisonnablement
        passer à côté.
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
