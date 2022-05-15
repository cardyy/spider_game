import React from "react";

export default function Check_intersection(setLine,setGameOver) {
  let lineObj;
  const lineSegmentsIntersect = (x1, y1, x2, y2, x3, y3, x4, y4, item) => {
    const a_dx = x2 - x1;
    const a_dy = y2 - y1;
    const b_dx = x4 - x3;
    const b_dy = y4 - y3;
    const s =
      (-a_dy * (x1 - x3) + a_dx * (y1 - y3)) / (-b_dx * a_dy + a_dx * b_dy);
    const t =
      (+b_dx * (y1 - y3) - b_dy * (x1 - x3)) / (-b_dx * a_dy + a_dx * b_dy);
    const intersected = (() => {
      if (s >= 0 && s <= 1 && t >= 0 && t <= 1) return true;
      return false;
    })();

    if (
      x1 !== x3 &&
      x1 !== x4 &&
      x2 !== x3 &&
      x2 !== x4 &&
      y1 !== y3 &&
      y1 !== y4 &&
      y2 !== y3 &&
      y2 !== y4 &&
      intersected
    ) {
      lineObj = {
        ...lineObj,
        [item[0].id]: "red",
        [item[1].id]: "red",
      };
    }
      setLine(lineObj);
      console.log(lineObj)
      
  };

  return { lineSegmentsIntersect };
}
