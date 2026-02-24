// src/App.jsx
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // TODO (students must add state):
  // numOfSquares (default 6)
  // colors
  // picked
  // status
  // headerColor
  // resetText

  const [numOfSquares, setNumOfSquares] = useState(6);
  const [colors, setColors] = useState([]);

  const [picked, setPicked] = useState("");

  const [status, setStatus] = useState("");

  const [headerColor, setHeaderColor] = useState("#4682b4");

  const [resetText, setResetText] = useState("NEW COLOR");

  // TODO: generateColors()
  function generateColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      arr.push(`rgb(${r}, ${g}, ${b})`);
    }
    return arr;
  }

  // TODO: pickRandomColor()
  function pickRandomColor(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  // TODO: resetGame()
  function resetGame(level = numOfSquares) {
    const newColors = generateColors(level);
    const randomColor = pickRandomColor(newColors);

    setColors(newColors);
    setPicked(randomColor);
    setHeaderColor("#4682b4");
    setStatus("");
    setResetText("NEW COLOR");
  }

  // TODO: event handlers
  function handleSquareClick(color) {
    if (color === picked) {
      setStatus("CORRECT");
      setHeaderColor(picked);
      setColors(Array(numOfSquares).fill(picked));
      setResetText("PLAY AGAIN?");
    } else {
      setStatus("TRY AGAIN");
      setColors((prev) =>
        prev.map((c) => (c === color ? "#b3b3b3" : c))
      );
    }
  }

  function handleLevelChange(level) {
    setNumOfSquares(level);
    resetGame(level);
  }

  useEffect(() => {
    // TODO: initialize the game (resetGame)
    resetGame();
  }, []);

  return (
    <>
      {/* Top header bar */}
      <div className="top-bar" style={{ backgroundColor: headerColor }}>
        <div className="title">THE GREAT</div>
        <span id="picked">{picked}</span>
        <div className="subtitle">GUESSING GAME</div>
      </div>

      {/* Controls */}
      <div className="controls">
        {/* MODIFIED: connect reset button */}
        <button id="reset" onClick={() => resetGame()}>
          {resetText}
        </button>

        {/* MODIFIED: display status */}
        <span id="status">{status}</span>

        {/* MODIFIED: connect level buttons and dynamic selected class */}
        <button
          className={numOfSquares === 3 ? "level selected" : "level"}
          onClick={() => handleLevelChange(3)}
        >
          EASY
        </button>
        <button
          className={numOfSquares === 6 ? "level selected" : "level"}
          onClick={() => handleLevelChange(6)}
        >
          HARD
        </button>
      </div>

      {/* Game board */}
      <div id="container">
        <div className="squares">
          {/* 
            TODO: Render 3 or 6 <div className="square"></div> using React (no DOM queries)
            MODIFIED: dynamically render squares from colors array 
          */}
          {colors.map((color, index) => (
            <div
              key={index}
              className="square"
              style={{ backgroundColor: color }}
              onClick={() => handleSquareClick(color)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;