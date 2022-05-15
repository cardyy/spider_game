import React from "react";
import spiders from "./spidersArray.js";

export default function Spiders_component(props) {
  return (
    <>
      {spiders &&
        spiders.map((spider) => (
          <div
            className="container"
            id={spider}
            key={spider}
            onMouseDown={props.initialiseDrag}
          />
        ))}
    </>
  );
}