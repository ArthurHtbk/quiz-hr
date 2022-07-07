import Pages from "./Pages";

const Error = ({ timeline, setTimeline }) => {
  return timeline === 9 ? (
    <>
      <h1>ERROR 404</h1>
      <p>Oups... il semblerait que ce que vous cherchez est introuvable.</p>
      <Pages
        on="Retourner à l'accueil"
        off="Revoir votre résultat"
        timeline={timeline}
        setTimeline={setTimeline}
      />
    </>
  ) : null;
};

export default Error;
