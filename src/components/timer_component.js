import React, { useState, useEffect } from 'react';

export default function Timer_component() {
  const [counter, setCounter] = useState(0);
  const level = localStorage.getItem('level');
  useEffect(() => {
    setTimeout(() => {
      setCounter((x) => x + 1);
    }, 1000);
  }, [counter]);
  return (
    <div className='timmer'>
      <p>Untangles the web in: {counter}</p>
      <p>Level: {level}</p>
    </div>
  );
}
