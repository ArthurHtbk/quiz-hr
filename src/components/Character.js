import Pages from "./Pages";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Character = ({ timeline, setTimeline }) => {
  const [dedicated, setDedicated] = useState(false);
  const [curious, setCurious] = useState(false);
  const [independent, setIndependent] = useState(false);
  const [kind, setKind] = useState(false);

  return timeline === 6 ? (
    <>
      <h1>En conclusion</h1>
      <legend>
        En vous basant sur ce quiz, comment décririez-vous la personnalité
        d'Arthur ? Vous pouvez choisir plusieurs options.
      </legend>
      <div className="option">
        <div className="square">
          <FontAwesomeIcon icon="check" />
        </div>
        <p>Humble</p>
      </div>
      <div
        className="option"
        onClick={() => {
          dedicated ? setDedicated(false) : setDedicated(true);
        }}
      >
        <div className="square">
          <FontAwesomeIcon
            icon="check"
            style={{ display: !dedicated && "none" }}
          />
        </div>
        <p>Motivé</p>
      </div>
      <div
        className="option"
        onClick={() => {
          curious ? setCurious(false) : setCurious(true);
        }}
      >
        <div className="square">
          <FontAwesomeIcon
            icon="check"
            style={{ display: !curious && "none" }}
          />
        </div>
        <p>Curieux</p>
      </div>
      <div
        className="option"
        onClick={() => {
          independent ? setIndependent(false) : setIndependent(true);
        }}
      >
        <div className="square">
          <FontAwesomeIcon
            icon="check"
            style={{ display: !independent && "none" }}
          />
        </div>
        <p>Autonome</p>
      </div>
      <div
        className="option"
        onClick={() => {
          kind ? setKind(false) : setKind(true);
        }}
      >
        <div className="square">
          <FontAwesomeIcon icon="check" style={{ display: !kind && "none" }} />
        </div>
        <p>Bienveillant</p>
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

export default Character;
