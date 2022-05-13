import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
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
      window.removeEventListener('mousemove', startDragging, false);
      window.removeEventListener('mouseup', stopDragging, false);
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
    window.addEventListener('mousemove', startDragging, false);
    window.addEventListener('mouseup', stopDragging, false);
  };

  useEffect(() => {
    let a = document.getElementById('one');
    let b = document.getElementById('two');
    let c = document.getElementById('three');
    let d = document.getElementById('four');
    let e = document.getElementById('five');
    let f = document.getElementById('six');
    let g = document.getElementById('seven');
    let h = document.getElementById('eight');
    let i = document.getElementById('nine');

    const updatedItem = {
      one: {
        x: a.getBoundingClientRect().x + 32,
        y: a.getBoundingClientRect().y + 16,
      },
      two: {
        x: b.getBoundingClientRect().x + 32,
        y: b.getBoundingClientRect().y + 16,
      },
      three: {
        x: c.getBoundingClientRect().x + 32,
        y: c.getBoundingClientRect().y + 16,
      },
      four: {
        x: d.getBoundingClientRect().x + 32,
        y: d.getBoundingClientRect().y + 16,
      },
      five: {
        x: e.getBoundingClientRect().x + 32,
        y: e.getBoundingClientRect().y + 16,
      },
      six: {
        x: f.getBoundingClientRect().x + 32,
        y: f.getBoundingClientRect().y + 16,
      },
      seven: {
        x: g.getBoundingClientRect().x + 32,
        y: g.getBoundingClientRect().y + 16,
      },
      eight: {
        x: h.getBoundingClientRect().x + 32,
        y: h.getBoundingClientRect().y + 16,
      },
      nine: {
        x: i.getBoundingClientRect().x + 32,
        y: i.getBoundingClientRect().y + 16,
      },
    };

    setDivCoordinates(updatedItem);
  }, []);

  return (
    <div className='App'>
      <div className='container s1' id='one' onMouseDown={initialiseDrag}></div>
      <div className='container s2' id='two' onMouseDown={initialiseDrag}></div>
      <div
        className='container s3'
        id='three'
        onMouseDown={initialiseDrag}></div>
      <div
        className='container s4'
        id='four'
        onMouseDown={initialiseDrag}></div>
      <div
        className='container s5'
        id='five'
        onMouseDown={initialiseDrag}></div>
      <div className='container s6' id='six' onMouseDown={initialiseDrag}></div>
      <div
        className='container s7'
        id='seven'
        onMouseDown={initialiseDrag}></div>
      <div
        className='container s8'
        id='eight'
        onMouseDown={initialiseDrag}></div>
      <div
        className='container s9'
        id='nine'
        onMouseDown={initialiseDrag}></div>
      <svg className='l1'>
        <line
          x1={divCoordinates.one !== undefined ? divCoordinates.one.x : 0}
          y1={divCoordinates.one !== undefined ? divCoordinates.one.y : 0}
          x2={divCoordinates.eight !== undefined ? divCoordinates.eight.x : 0}
          y2={divCoordinates.eight !== undefined ? divCoordinates.eight.y : 0}
          stroke='yellow'
        />
        <line
          x1={divCoordinates.eight !== undefined ? divCoordinates.eight.x : 0}
          y1={divCoordinates.eight !== undefined ? divCoordinates.eight.y : 0}
          x2={divCoordinates.three !== undefined ? divCoordinates.three.x : 0}
          y2={divCoordinates.three !== undefined ? divCoordinates.three.y : 0}
          stroke='yellow'
        />
        <line
          x1={divCoordinates.eight !== undefined ? divCoordinates.eight.x : 0}
          y1={divCoordinates.eight !== undefined ? divCoordinates.eight.y : 0}
          x2={divCoordinates.five !== undefined ? divCoordinates.five.x : 0}
          y2={divCoordinates.five !== undefined ? divCoordinates.five.y : 0}
          stroke='yellow'
        />
        <line
          x1={divCoordinates.two !== undefined ? divCoordinates.two.x : 0}
          y1={divCoordinates.two !== undefined ? divCoordinates.two.y : 0}
          x2={divCoordinates.four !== undefined ? divCoordinates.four.x : 0}
          y2={divCoordinates.four !== undefined ? divCoordinates.four.y : 0}
          stroke='yellow'
        />
        <line
          x1={divCoordinates.three !== undefined ? divCoordinates.three.x : 0}
          y1={divCoordinates.three !== undefined ? divCoordinates.three.y : 0}
          x2={divCoordinates.five !== undefined ? divCoordinates.five.x : 0}
          y2={divCoordinates.five !== undefined ? divCoordinates.five.y : 0}
          stroke='yellow'
        />
        <line
          x1={divCoordinates.four !== undefined ? divCoordinates.four.x : 0}
          y1={divCoordinates.four !== undefined ? divCoordinates.four.y : 0}
          x2={divCoordinates.five !== undefined ? divCoordinates.five.x : 0}
          y2={divCoordinates.five !== undefined ? divCoordinates.five.y : 0}
          stroke='yellow'
        />
        <line
          x1={divCoordinates.six !== undefined ? divCoordinates.six.x : 0}
          y1={divCoordinates.six !== undefined ? divCoordinates.six.y : 0}
          x2={divCoordinates.five !== undefined ? divCoordinates.five.x : 0}
          y2={divCoordinates.five !== undefined ? divCoordinates.five.y : 0}
          stroke='yellow'
        />
        <line
          x1={divCoordinates.seven !== undefined ? divCoordinates.seven.x : 0}
          y1={divCoordinates.seven !== undefined ? divCoordinates.seven.y : 0}
          x2={divCoordinates.eight !== undefined ? divCoordinates.eight.x : 0}
          y2={divCoordinates.eight !== undefined ? divCoordinates.eight.y : 0}
          stroke='yellow'
        />
        <line
          x1={divCoordinates.seven !== undefined ? divCoordinates.seven.x : 0}
          y1={divCoordinates.seven !== undefined ? divCoordinates.seven.y : 0}
          x2={divCoordinates.nine !== undefined ? divCoordinates.nine.x : 0}
          y2={divCoordinates.nine !== undefined ? divCoordinates.nine.y : 0}
          stroke='yellow'
        />
      </svg>
    </div>
  );
}
