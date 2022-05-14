import { useState, useRef, useEffect } from "react";

export default function UseFetch() {
  const [divCoordinates, setDivCoordinates] = useState({});

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
        x: spider8 .getBoundingClientRect().x + 32,
        y: spider8 .getBoundingClientRect().y + 16,
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
