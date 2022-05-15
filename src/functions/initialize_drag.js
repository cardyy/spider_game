

export default function Initialize_drag(dragProps,divCoordinates,setDivCoordinates,setLine) {
    const initialiseDrag = (event) => {
        //spider div id
        const id = event.target.id;
        let lineObj;
        const current = document.getElementById(id);
    
        //function to detect when two lines meet
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
        };
    
        // drag function
        const startDragging = ({ clientX, clientY }) => {
          // update coordinates of dragged div only
          const obj = {
            ...divCoordinates,
            [id]: {
              x: current.getBoundingClientRect().x + 16,
              y: current.getBoundingClientRect().y + 16,
            },
          };
          setDivCoordinates(obj);
    
          // iterate through all the possible line meeting combinations
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
    
            // call the function to detect when two lines meet
            lineSegmentsIntersect(x1, y1, x2, y2, x3, y3, x4, y4, item);
          });
          setLine(lineObj);
          current.style.transform = `translate(${
            dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX
          }px, ${
            dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY
          }px)`;
        };
    
        // stop drag function
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
    return { initialiseDrag } 
}