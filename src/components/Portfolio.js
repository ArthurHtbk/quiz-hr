import Pages from "./Pages";

const Portfolio = ({ timeline, setTimeline }) => {
  return timeline === 4 ? (
    <>
      <h1>Maintenant, allez jeter un œil à mon portfolio.</h1>
      <p>
        <a
          href="https://arthur-heurtebise.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ce portfolio-là.
        </a>
      </p>
      <legend>Alors, plutôt chouette, pas vrai ?</legend>
      <div className="radio-container">
        <div className="radio">
          <input type="radio" id="yes-port" name="portfolio" defaultChecked />
          <label htmlFor="yes-port">Oui</label>
        </div>
        <div className="radio">
          <input type="radio" id="other-yes-port" name="portfolio" />
          <label htmlFor="other-yes-port">
            J'allais dire non, mais lire l'histoire d'Arthur, qui m'a submergé
            d'émotion, ainsi que consulter ses projets sont autant d'éléments
            qui m'ont poussé à changer d'avis, et donc à répondre oui
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

export default Portfolio;
