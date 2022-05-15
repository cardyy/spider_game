import React, { useState, useEffect } from "react";

export default function Timer_component() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter((x) => x + 1);
    }, 1000);
    
  }, [counter]);
  return (
    <div className="timmer">
      <p>Untangles the web in: {counter}</p>
    </div>
  );
}
