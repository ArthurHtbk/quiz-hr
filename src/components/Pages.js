const Pages = ({ on, off, timeline, setTimeline }) => {
  const incrementationHandler = () => {
    if (timeline === 9) {
      setTimeline(0);
    } else {
      setTimeline(timeline + 1);
    }
  };

  const decrementationHandler = () => {
    if (timeline > 0) {
      setTimeline(timeline - 1);
    }
  };

  return (
    <div className="pages">
      <a
        href={
          timeline === 0
            ? "https://arthur-heurtebise.netlify.app/#contact"
            : "#top"
        }
      >
        <button onClick={decrementationHandler}>{off}</button>
      </a>
      <a href="#top">
        <button className="lit" onClick={incrementationHandler}>
          {on}
        </button>
      </a>
    </div>
  );
};

export default Pages;
