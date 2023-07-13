import React, { useState } from "react";
import "./ColorBox.css";
export default function ColorBox({ colors }) {
  const randomChoice = (arr) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  };
  const [color, setColor] = useState(randomChoice(colors));

  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
    console.log("클릭");
  };

  return (
    <div
      className="ColorBox"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    >
      ColorBoxes
    </div>
  );
}
