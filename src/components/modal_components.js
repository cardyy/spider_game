import React, { useState, useEffect } from "react";

export default function Modal() {
  const [counter, setCounter] = useState(30);
  useEffect(() => {
    setTimeout(() => {
      setCounter((x) => x - 1);
    }, 1000);
    if (counter === 0) window.location.reload();
  }, [counter]);

  return (
    <div className="modal-container">
      <div className="modal" id="modal">
        <div className="content">Congradulations you have won the game!</div>
        <div className="content">waiting for new level in: {counter}</div>
      </div>
    </div>
  );
}
