import Pages from "./Pages";

const Home = ({ timeline, setTimeline }) => {
  return timeline ? null : (
    <>
      <h1>QUEL TYPE DE RECRUTEUR·EUSE ÊTES-VOUS ?</h1>
      <p>
        Vous souhaitez faire votre métier de la meilleure des façons. Vous
        souhaitez enrichir vos équipes en collaborant avec de nouvelles
        personnes, correspondant toujours mieux à votre culture d'entreprise, et
        ayant des compétences toujours plus cohérentes avec votre projet.
      </p>
      <p>
        Et ça tombe bien, ce quiz vous aidera dans cette direction ! Il est,
        comme vous pourrez le constater, d'une rigueur toute scientifique, et
        n'est absolument pas biaisé en la faveur, disons, de la personne qui l'a
        réalisé par exemple. Non, pas du tout. Je ne vois où vous pourriez aller
        chercher un truc pareil.
      </p>
      <p>
        Toujours est-il que vous vous apprêtez à passer un quiz très sérieux.
        Les résultats seront analysés au moyen d'algorithmes d'une grande
        complexité et exactitude, réalisés dans le souci, encore une fois, d'une
        objectivité absolue. Quel que soit le résultat du quiz, il sera donc
        susceptible de changer votre vie à tout jamais. Êtes-vous prêt·e à
        découvrir la vérité nichée au creux de votre cœur ?
      </p>
      <Pages
        on="Oui, je suis prêt·e à m'avancer au devant de ma destinée"
        off="Pressé·e ? Laissez-moi un message !"
        timeline={timeline}
        setTimeline={setTimeline}
      />
    </>
  );
};

export default Home;
