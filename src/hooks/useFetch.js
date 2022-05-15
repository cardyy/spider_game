import { useState, useRef, useEffect } from "react";

export default function UseFetch() {
  const [divCoordinates, setDivCoordinates] = useState({});
  const [hasIntersected, setHasIntersected] = useState();
  const [isDragging, setIsDragging] = useState(false);

  const dragProps = useRef();

  const initialiseDrag = (event) => {
    const id = event.target.id;
    const current = document.getElementById(id);
    const startDragging = ({ clientX, clientY }) => {
      const obj = {
        ...divCoordinates,
        [id]: {
          x: current.getBoundingClientRect().x + 32,
          y: current.getBoundingClientRect().y + 16,
        },
      };
      setDivCoordinates(obj);
      setIsDragging(!isDragging);
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
          intersected &&
          x1 !== x3 &&
          x1 !== x4 &&
          x2 !== x3 &&
          x2 !== x4 &&
          y1 !== y3 &&
          y1 !== y4 &&
          y2 !== y3 &&
          y2 !== y4
        ) {
          item[0].setAttribute("stroke", "red");
          item[1].setAttribute("stroke", "red");
        } else {
          item[0].setAttribute("stroke", "yellow");
          item[1].setAttribute("stroke", "yellow");
        }
      };

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
        let x1 = item[0].x1.baseVal.value - 10;
        let y1 = item[0].y1.animVal.value - 10;
        let x2 = item[0].x2.baseVal.value - 10;
        let y2 = item[0].y2.animVal.value - 10;
        let x3 = item[1].x1.baseVal.value - 10;
        let y3 = item[1].y1.animVal.value - 10;
        let x4 = item[1].x2.baseVal.value - 10;
        let y4 = item[1].y2.animVal.value - 10;
        lineSegmentsIntersect(x1, y1, x2, y2, x3, y3, x4, y4, item);
      });

      current.style.transform = `translate(${
        dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX
      }px, ${
        dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY
      }px)`;
    };

    const stopDragging = () => {
      window.removeEventListener("mousemove", startDragging, false);
      window.removeEventListener("mouseup", stopDragging, false);
    };

    const { target, clientX, clientY } = event;
    const { offsetTop, offsetLeft } = target;

    const { left, top } = current.getBoundingClientRect();

    dragProps.current = {
      dragStartLeft: left - offsetLeft,
      dragStartTop: top - offsetTop,
      dragStartX: clientX,
      dragStartY: clientY,
    };
    window.addEventListener("mousemove", startDragging, false);
    window.addEventListener("mouseup", stopDragging, false);
  };

  useEffect(() => {
    if (Object.getOwnPropertyNames(divCoordinates).length === 0) return;
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
        intersected &&
        x1 !== x3 &&
        x1 !== x4 &&
        x2 !== x3 &&
        x2 !== x4 &&
        y1 !== y3 &&
        y1 !== y4 &&
        y2 !== y3 &&
        y2 !== y4
      ) {
        item[0].setAttribute("stroke", "red");
        item[1].setAttribute("stroke", "red");
      }
    };
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

    lineIntersectionCombination.forEach((item, index) => {
      let x1 = item[0].x1.baseVal.value - 10;
      let y1 = item[0].y1.animVal.value - 10;
      let x2 = item[0].x2.baseVal.value - 10;
      let y2 = item[0].y2.animVal.value - 10;
      let x3 = item[1].x1.baseVal.value - 10;
      let y3 = item[1].y1.animVal.value - 10;
      let x4 = item[1].x2.baseVal.value - 10;
      let y4 = item[1].y2.animVal.value - 10;
      lineSegmentsIntersect(x1, y1, x2, y2, x3, y3, x4, y4, item);
    });
  }, [hasIntersected, divCoordinates]);

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
        x: spider1.getBoundingClientRect().x + 32,
        y: spider1.getBoundingClientRect().y + 16,
      },
      two: {
        x: spider2.getBoundingClientRect().x + 32,
        y: spider2.getBoundingClientRect().y + 16,
      },
      three: {
        x: spider3.getBoundingClientRect().x + 32,
        y: spider3.getBoundingClientRect().y + 16,
      },
      four: {
        x: spider4.getBoundingClientRect().x + 32,
        y: spider4.getBoundingClientRect().y + 16,
      },
      five: {
        x: spider5.getBoundingClientRect().x + 32,
        y: spider5.getBoundingClientRect().y + 16,
      },
      six: {
        x: spider6.getBoundingClientRect().x + 32,
        y: spider6.getBoundingClientRect().y + 16,
      },
      seven: {
        x: spider7.getBoundingClientRect().x + 32,
        y: spider7.getBoundingClientRect().y + 16,
      },
      eight: {
        x: spider8.getBoundingClientRect().x + 32,
        y: spider8.getBoundingClientRect().y + 16,
      },
      nine: {
        x: spider9.getBoundingClientRect().x + 32,
        y: spider9.getBoundingClientRect().y + 16,
      },
    };

    setDivCoordinates(updatedItem);
  }, []);
  return { divCoordinates, setDivCoordinates, initialiseDrag };
}
