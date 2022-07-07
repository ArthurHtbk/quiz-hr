import tree from "../assets/tree.jpg";

import Pages from "./Pages";

const Result = ({ timeline, setTimeline }) => {
  return timeline === 8 ? (
    <>
      <h1>Résultat</h1>
      <h2>
        Bravo, vous êtes le type de recruteur·euse qui embaucherait Arthur
        Heurtebise sans problème !
      </h2>
      <img src={tree} alt="Moi devant un arbre" className="tree" />
      <p>
        Déterminé·e, talentueux·se, intelligent·e, vous sentez bon et avez
        beaucoup de charisme ; vous êtes bien un·e recruteur·euse qui pourrait
        embaucher un développeur web junior (comme par exemple, au hasard,
        Arthur Heurtebise) ! Le succès dans votre vie professionnelle n'attend
        plus que vous !
      </p>
      <p>
        Il semblerait que, malgré tous mes efforts pour rendre ce quiz
        totalement juste et impartial, certains éléments demeurent biaisés en ma
        faveur. Dans un souci de transparence, j'ai donc décidé de vous
        présenter les quelques défauts qui pourraient rééquilibrer votre opinion
        à mon propos. Cliquez pour en savoir plus !
      </p>
      <Pages
        on="Découvrir les défauts d'Arthur"
        off="Précédent"
        timeline={timeline}
        setTimeline={setTimeline}
      />
    </>
  ) : null;
};

export default Result;
