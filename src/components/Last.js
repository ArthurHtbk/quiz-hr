import bench from "../assets/bench.jpg";

import Pages from "./Pages";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Last = ({ timeline, setTimeline }) => {
  const [yes, setYes] = useState(true);
  const [pink, setPink] = useState(false);
  const [big, setBig] = useState(false);
  const [childhood, setChildhood] = useState(false);

  return timeline === 7 ? (
    <>
      <h1>Une petite dernière... Est-ce que vous allez m'embaucher ?</h1>
      <img src={bench} alt="Moi devant un banc" className="bench" />
      <legend>Si je dis "s'il vous plaît" ?</legend>
      <div
        className="option"
        onClick={() => {
          yes ? setYes(false) : setYes(true);
        }}
      >
        <div className="square">
          <FontAwesomeIcon icon="check" style={{ display: !yes && "none" }} />
        </div>
        <p>Oui</p>
      </div>
      <div
        className="option"
        onClick={() => {
          pink ? setPink(false) : setPink(true);
        }}
      >
        <div className="square">
          <FontAwesomeIcon icon="check" style={{ display: !pink && "none" }} />
        </div>
        <p className="pink">Oui en rose</p>
      </div>
      <div
        className="option"
        onClick={() => {
          big ? setBig(false) : setBig(true);
        }}
      >
        <div className="square">
          <FontAwesomeIcon icon="check" style={{ display: !big && "none" }} />
        </div>
        <p className="big">Oui en gros</p>
      </div>
      <div
        className="option"
        onClick={() => {
          childhood ? setChildhood(false) : setChildhood(true);
        }}
      >
        <div className="square">
          <FontAwesomeIcon
            icon="check"
            style={{ display: !childhood && "none" }}
          />
        </div>
        <p className="funny-font">Oui dans une police de notre enfance</p>
      </div>
      <Pages
        on="Découvrir votre résultat"
        off="Précédent"
        timeline={timeline}
        setTimeline={setTimeline}
      />
    </>
  ) : null;
};

export default Last;
