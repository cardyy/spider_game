import {useState, useRef,useEffect} from 'react'

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
  return {divCoordinates, setDivCoordinates,initialiseDrag}
}
