import React from "react";

export default function Lines_component(props) {
  return (
    <>
      <svg className="l1">
        <line
          x1={
            props.divCoordinates.one !== undefined
              ? props.divCoordinates.one.x
              : 0
          }
          y1={
            props.divCoordinates.one !== undefined
              ? props.divCoordinates.one.y
              : 0
          }
          x2={
            props.divCoordinates.eight !== undefined
              ? props.divCoordinates.eight.x
              : 0
          }
          y2={
            props.divCoordinates.eight !== undefined
              ? props.divCoordinates.eight.y
              : 0
          }
          id="line1"
          stroke={
            props.line !== undefined && props.line.line1 !== undefined
              ? props.line.line1
              : "yellow"
          }
        />
        <line
          x1={
            props.divCoordinates.three !== undefined
              ? props.divCoordinates.three.x
              : 0
          }
          y1={
            props.divCoordinates.three !== undefined
              ? props.divCoordinates.three.y
              : 0
          }
          x2={
            props.divCoordinates.eight !== undefined
              ? props.divCoordinates.eight.x
              : 0
          }
          y2={
            props.divCoordinates.eight !== undefined
              ? props.divCoordinates.eight.y
              : 0
          }
          id="line2"
          stroke={
            props.line !== undefined && props.line.line2 !== undefined
              ? props.line.line2
              : "yellow"
          }
        />
        <line
          x1={
            props.divCoordinates.five !== undefined
              ? props.divCoordinates.five.x
              : 0
          }
          y1={
            props.divCoordinates.five !== undefined
              ? props.divCoordinates.five.y
              : 0
          }
          x2={
            props.divCoordinates.eight !== undefined
              ? props.divCoordinates.eight.x
              : 0
          }
          y2={
            props.divCoordinates.eight !== undefined
              ? props.divCoordinates.eight.y
              : 0
          }
          id="line3"
          stroke={
            props.line !== undefined && props.line.line3 !== undefined
              ? props.line.line3
              : "yellow"
          }
        />
        <line
          x1={
            props.divCoordinates.two !== undefined
              ? props.divCoordinates.two.x
              : 0
          }
          y1={
            props.divCoordinates.two !== undefined
              ? props.divCoordinates.two.y
              : 0
          }
          x2={
            props.divCoordinates.four !== undefined
              ? props.divCoordinates.four.x
              : 0
          }
          y2={
            props.divCoordinates.four !== undefined
              ? props.divCoordinates.four.y
              : 0
          }
          id="line4"
          stroke={
            props.line !== undefined && props.line.line4 !== undefined
              ? props.line.line4
              : "yellow"
          }
        />
        <line
          x1={
            props.divCoordinates.three !== undefined
              ? props.divCoordinates.three.x
              : 0
          }
          y1={
            props.divCoordinates.three !== undefined
              ? props.divCoordinates.three.y
              : 0
          }
          x2={
            props.divCoordinates.five !== undefined
              ? props.divCoordinates.five.x
              : 0
          }
          y2={
            props.divCoordinates.five !== undefined
              ? props.divCoordinates.five.y
              : 0
          }
          id="line5"
          stroke={
            props.line !== undefined && props.line.line5 !== undefined
              ? props.line.line5
              : "yellow"
          }
        />
        <line
          x1={
            props.divCoordinates.four !== undefined
              ? props.divCoordinates.four.x
              : 0
          }
          y1={
            props.divCoordinates.four !== undefined
              ? props.divCoordinates.four.y
              : 0
          }
          x2={
            props.divCoordinates.five !== undefined
              ? props.divCoordinates.five.x
              : 0
          }
          y2={
            props.divCoordinates.five !== undefined
              ? props.divCoordinates.five.y
              : 0
          }
          id="line6"
          stroke={
            props.line !== undefined && props.line.line6 !== undefined
              ? props.line.line6
              : "yellow"
          }
        />
        <line
          x1={
            props.divCoordinates.six !== undefined
              ? props.divCoordinates.six.x
              : 0
          }
          y1={
            props.divCoordinates.six !== undefined
              ? props.divCoordinates.six.y
              : 0
          }
          x2={
            props.divCoordinates.five !== undefined
              ? props.divCoordinates.five.x
              : 0
          }
          y2={
            props.divCoordinates.five !== undefined
              ? props.divCoordinates.five.y
              : 0
          }
          id="line7"
          stroke={
            props.line !== undefined && props.line.line7 !== undefined
              ? props.line.line7
              : "yellow"
          }
        />
        <line
          x1={
            props.divCoordinates.seven !== undefined
              ? props.divCoordinates.seven.x
              : 0
          }
          y1={
            props.divCoordinates.seven !== undefined
              ? props.divCoordinates.seven.y
              : 0
          }
          x2={
            props.divCoordinates.eight !== undefined
              ? props.divCoordinates.eight.x
              : 0
          }
          y2={
            props.divCoordinates.eight !== undefined
              ? props.divCoordinates.eight.y
              : 0
          }
          id="line8"
          stroke={
            props.line !== undefined && props.line.line8 !== undefined
              ? props.line.line8
              : "yellow"
          }
        />
        <line
          x1={
            props.divCoordinates.seven !== undefined
              ? props.divCoordinates.seven.x
              : 0
          }
          y1={
            props.divCoordinates.seven !== undefined
              ? props.divCoordinates.seven.y
              : 0
          }
          x2={
            props.divCoordinates.nine !== undefined
              ? props.divCoordinates.nine.x
              : 0
          }
          y2={
            props.divCoordinates.nine !== undefined
              ? props.divCoordinates.nine.y
              : 0
          }
          id="line9"
          stroke={
            props.line !== undefined && props.line.line9 !== undefined
              ? props.line.line9
              : "yellow"
          }
        />
      </svg>
    </>
  );
}
