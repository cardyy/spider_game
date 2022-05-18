import React from "react";
import spidersArray from "./spidersArray.js";

import "./spider_component.css";
export default function Spiders_component(props) {
  
  const { spiders } = spidersArray
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