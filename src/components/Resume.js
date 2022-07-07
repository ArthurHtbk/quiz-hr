import Pages from "./Pages";

import resume from "../assets/CVArthurHeurtebise.jpg";

const Resume = ({ timeline, setTimeline }) => {
  return timeline === 3 ? (
    <>
      <h1>Regardez ce C.V bien attentivement.</h1>
      <img src={resume} alt="Mon C.V" className="resume" />
      <legend>Pas mal, non ?</legend>
      <div className="radio">
        <input type="radio" id="yes-res" name="resume" defaultChecked />
        <label htmlFor="yes-res">Oui</label>
      </div>
      <div className="radio">
        <input type="radio" id="other-yes-res" name="resume" />
        <label htmlFor="other-yes-res">
          J'allais dire non, mais des éléments internes au C.V d'Arthur tels que
          ses compétences et ses soft-skills m'ont poussé à changer d'avis, et
          donc à répondre oui
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

export default Resume;
