import somersault from "../assets/somersault.gif";

import Pages from "./Pages";

const Somersault = ({ timeline, setTimeline }) => {
  return timeline === 5 ? (
    <>
      <h1>Regardez ce que je sais faire.</h1>
      <img
        src={somersault}
        alt="Démonstration de mes prouesses athlétiques"
        className="somersault"
      />
      <legend>
        Un gars souple comme ça, ça ferait une bonne addition à vos équipes, non
        ?
      </legend>
      <div className="radio-container">
        <div className="radio">
          <input type="radio" id="yes-som" name="somersault" defaultChecked />
          <label htmlFor="yes-som">Oui</label>
        </div>
        <div className="radio">
          <input type="radio" id="other-yes-som" name="somersault" />
          <label htmlFor="other-yes-som">
            J'allais dire non, mais les prouesses athlétiques d'Arthur, ainsi
            que son goût raffiné en termes de chemises, m'ont poussé à changer
            d'avis, et donc à répondre oui
          </label>
        </div>
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

export default Somersault;
