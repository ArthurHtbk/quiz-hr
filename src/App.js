import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Somersault from "./components/Somersault";
import Character from "./components/Character";
import Last from "./components/Last";
import Result from "./components/Result";
import Error from "./components/Error";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faCheck);

function App() {
  const [timeline, setTimeline] = useState(0);

  return (
    <div>
      <Header />
      <div className="container">
        <Home timeline={timeline} setTimeline={setTimeline} />
        <Intro timeline={timeline} setTimeline={setTimeline} />
        <Experience timeline={timeline} setTimeline={setTimeline} />
        <Resume timeline={timeline} setTimeline={setTimeline} />
        <Portfolio timeline={timeline} setTimeline={setTimeline} />
        <Somersault timeline={timeline} setTimeline={setTimeline} />
        <Character timeline={timeline} setTimeline={setTimeline} />
        <Last timeline={timeline} setTimeline={setTimeline} />
        <Result timeline={timeline} setTimeline={setTimeline} />
        <Error timeline={timeline} setTimeline={setTimeline} />
      </div>
    </div>
  );
}

export default App;
