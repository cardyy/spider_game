import React from "react";
import useFetch from "./hooks/useFetch";
import spiders from "./spiders.js";

import "./App.css";

export default function App() {
  const { divCoordinates, initialiseDrag } = useFetch();

  return (
    <div className="App">
      {spiders &&
        spiders.map((spider) => (
          <div
            className="container"
            id={spider}
            key={spider}
            onMouseDown={initialiseDrag}
          />
        ))}
      <svg className="l1">
        <line
          x1={divCoordinates.one !== undefined ? divCoordinates.one.x : 0}
          y1={divCoordinates.one !== undefined ? divCoordinates.one.y : 0}
          x2={divCoordinates.eight !== undefined ? divCoordinates.eight.x : 0}
          y2={divCoordinates.eight !== undefined ? divCoordinates.eight.y : 0}
          id="line1"
          stroke="yellow"
        />
        <line
          x1={divCoordinates.three !== undefined ? divCoordinates.three.x : 0}
          y1={divCoordinates.three !== undefined ? divCoordinates.three.y : 0}
          x2={divCoordinates.eight !== undefined ? divCoordinates.eight.x : 0}
          y2={divCoordinates.eight !== undefined ? divCoordinates.eight.y : 0}
          id="line2"
          stroke="yellow"
        />
        <line
          x1={divCoordinates.five !== undefined ? divCoordinates.five.x : 0}
          y1={divCoordinates.five !== undefined ? divCoordinates.five.y : 0}
          x2={divCoordinates.eight !== undefined ? divCoordinates.eight.x : 0}
          y2={divCoordinates.eight !== undefined ? divCoordinates.eight.y : 0}
          id="line3"
          stroke="yellow"
        />
        <line
          x1={divCoordinates.two !== undefined ? divCoordinates.two.x : 0}
          y1={divCoordinates.two !== undefined ? divCoordinates.two.y : 0}
          x2={divCoordinates.four !== undefined ? divCoordinates.four.x : 0}
          y2={divCoordinates.four !== undefined ? divCoordinates.four.y : 0}
          id="line4"
          stroke="yellow"
        />
        <line
          x1={divCoordinates.three !== undefined ? divCoordinates.three.x : 0}
          y1={divCoordinates.three !== undefined ? divCoordinates.three.y : 0}
          x2={divCoordinates.five !== undefined ? divCoordinates.five.x : 0}
          y2={divCoordinates.five !== undefined ? divCoordinates.five.y : 0}
          id="line5"
          stroke="yellow"
        />
        <line
          x1={divCoordinates.four !== undefined ? divCoordinates.four.x : 0}
          y1={divCoordinates.four !== undefined ? divCoordinates.four.y : 0}
          x2={divCoordinates.five !== undefined ? divCoordinates.five.x : 0}
          y2={divCoordinates.five !== undefined ? divCoordinates.five.y : 0}
          id="line6"
          stroke="yellow"
        />
        <line
          x1={divCoordinates.six !== undefined ? divCoordinates.six.x : 0}
          y1={divCoordinates.six !== undefined ? divCoordinates.six.y : 0}
          x2={divCoordinates.five !== undefined ? divCoordinates.five.x : 0}
          y2={divCoordinates.five !== undefined ? divCoordinates.five.y : 0}
          id="line7"
          stroke="yellow"
        />
        <line
          x1={divCoordinates.seven !== undefined ? divCoordinates.seven.x : 0}
          y1={divCoordinates.seven !== undefined ? divCoordinates.seven.y : 0}
          x2={divCoordinates.eight !== undefined ? divCoordinates.eight.x : 0}
          y2={divCoordinates.eight !== undefined ? divCoordinates.eight.y : 0}
          id="line8"
          stroke="yellow"
        />
        <line
          x1={divCoordinates.seven !== undefined ? divCoordinates.seven.x : 0}
          y1={divCoordinates.seven !== undefined ? divCoordinates.seven.y : 0}
          x2={divCoordinates.nine !== undefined ? divCoordinates.nine.x : 0}
          y2={divCoordinates.nine !== undefined ? divCoordinates.nine.y : 0}
          id="line9"
          stroke="yellow"
        />
      </svg>
    </div>
  );
}
