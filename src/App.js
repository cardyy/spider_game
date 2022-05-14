import React from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

export default function App() {
  

  const {divCoordinates,initialiseDrag} = useFetch()

  

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
