import React from "react";
import spidersArray from "./spidersArray.js";

export default function Lines_component(props) {
  const { lines } = spidersArray
 
  return (
    <>
      <svg className="l1">
        {lines.map((line,index) => (
          <line
            key={index}
                    x1={
                      props.divCoordinates[line[0]] !== undefined
                        ? props.divCoordinates[line[0]].x
                        : 0
                    }
                    y1={
                      props.divCoordinates[line[0]] !== undefined
                        ? props.divCoordinates[line[0]].y
                        : 0
                    }
                    x2={
                      props.divCoordinates[line[1]] !== undefined
                        ? props.divCoordinates[line[1]].x
                        : 0
                    }
                    y2={
                      props.divCoordinates[line[1]] !== undefined
                        ? props.divCoordinates[line[1]].y
                        : 0
                    }
                    id={line[2]}
                    stroke={
                      props.line !== undefined && props.line[line[2]] !== undefined
                        ? props.line.line1
                        : "yellow"
                    }
                  />
        ))

        }
      </svg>
    </>
  );
}
