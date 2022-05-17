import { useState, useRef, useEffect } from "react";
import drag_spider from "../functions/initialize_drag";
import check_intersection from "../functions/check_intersection";

export default function UseFetch() {
  const [divCoordinates, setDivCoordinates] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [line, setLine] = useState({});
  const dragProps = useRef();
  
  const { lineSegmentsIntersect } = check_intersection(setLine, setGameOver);
  
  const { initialiseDrag } = drag_spider(
    dragProps,
    divCoordinates,
    setDivCoordinates,
    setLine,
    setGameOver
  );

  useEffect(() => {
    if (Object.getOwnPropertyNames(divCoordinates).length === 0) return;

    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let line3 = document.getElementById("line3");
    let line4 = document.getElementById("line4");
    let line5 = document.getElementById("line5");
    let line6 = document.getElementById("line6");
    let line7 = document.getElementById("line7");
    let line8 = document.getElementById("line8");
    let line9 = document.getElementById("line9");
    let newSpidersArray = [
      line1,
      line2,
      line3,
      line4,
      line5,
      line6,
      line7,
      line8,
      line9,
    ];
    const lineIntersectionCombination = newSpidersArray.flatMap((v, i) =>
      newSpidersArray.slice(i + 1).map((w) => [v, w])
    );

    lineIntersectionCombination.forEach((item) => {
      if (item[0] === null) return;
      let x1 = item[0].x1.baseVal.value;
      let y1 = item[0].y1.animVal.value;
      let x2 = item[0].x2.baseVal.value;
      let y2 = item[0].y2.animVal.value;
      let x3 = item[1].x1.baseVal.value;
      let y3 = item[1].y1.animVal.value;
      let x4 = item[1].x2.baseVal.value;
      let y4 = item[1].y2.animVal.value;
      lineSegmentsIntersect(x1, y1, x2, y2, x3, y3, x4, y4, item);
    });
    
    
  }, [divCoordinates, gameOver]);

  useEffect(() => {
    let spider1 = document.getElementById("one");
    let spider2 = document.getElementById("two");
    let spider3 = document.getElementById("three");
    let spider4 = document.getElementById("four");
    let spider5 = document.getElementById("five");
    let spider6 = document.getElementById("six");
    let spider7 = document.getElementById("seven");
    let spider8 = document.getElementById("eight");
    let spider9 = document.getElementById("nine");
    const updatedItem = {
      one: {
        x: spider1.getBoundingClientRect().x + 16,
        y: spider1.getBoundingClientRect().y + 16,
      },
      two: {
        x: spider2.getBoundingClientRect().x + 16,
        y: spider2.getBoundingClientRect().y + 16,
      },
      three: {
        x: spider3.getBoundingClientRect().x + 16,
        y: spider3.getBoundingClientRect().y + 16,
      },
      four: {
        x: spider4.getBoundingClientRect().x + 16,
        y: spider4.getBoundingClientRect().y + 16,
      },
      five: {
        x: spider5.getBoundingClientRect().x + 16,
        y: spider5.getBoundingClientRect().y + 16,
      },
      six: {
        x: spider6.getBoundingClientRect().x + 16,
        y: spider6.getBoundingClientRect().y + 16,
      },
      seven: {
        x: spider7.getBoundingClientRect().x + 16,
        y: spider7.getBoundingClientRect().y + 16,
      },
      eight: {
        x: spider8.getBoundingClientRect().x + 16,
        y: spider8.getBoundingClientRect().y + 16,
      },
      nine: {
        x: spider9.getBoundingClientRect().x + 16,
        y: spider9.getBoundingClientRect().y + 16,
      },
    };

    setDivCoordinates(updatedItem);
  }, []);
  return {
    divCoordinates,
    setDivCoordinates,
    initialiseDrag,
    line,
    gameOver,
  };
}
