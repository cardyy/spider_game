import React from "react";
import useFetch from "./hooks/useFetch";
import Spiders from "./components/spiders_component";
import Modal from "./components/modal_components";
import Lines from "./components/lines_component";
import Timmer from "./components/timer_component";

import "./App.css";

export default function App() {
  const { divCoordinates, initialiseDrag, line, gameOver } = useFetch();

  return (
    <div className="App">
      {gameOver && <Modal />}
      {!gameOver && <Timmer />}
      <Spiders initialiseDrag={initialiseDrag} />
      <Lines line={line} divCoordinates={divCoordinates} />
    </div>
  );
}