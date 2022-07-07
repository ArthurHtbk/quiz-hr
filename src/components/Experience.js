import Pages from "./Pages";

const Experience = ({ timeline, setTimeline }) => {
  return timeline === 2 ? (
    <>
      <h1>
        Seriez-vous prêt·e à embaucher un développeur web junior au sein de
        votre structure ?
      </h1>
      <div className="radio">
        <input type="radio" id="yes-exp" name="experience" defaultChecked />
        <label htmlFor="yes-exp">Oui</label>
      </div>
      <div className="radio">
        <input type="radio" id="other-yes-exp" name="experience" />
        <label htmlFor="other-yes-exp">
          J'allais dire non, mais des éléments externes qui n'ont rien à voir
          avec la présentation malhonnête de cette question m'ont poussé à
          changer d'avis, et donc à répondre oui
        </label>
      </div>
      <Pages
        on="Suivant"
        off="Précédent"
        timeline={timeline}
        setTimeline={setTimeline}
      />
    </>
  ) : null;
};
export default Experience;
