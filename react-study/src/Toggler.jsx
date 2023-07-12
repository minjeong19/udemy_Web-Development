import React, { useState } from "react";

export default function Toggler() {
  const [face, setFace] = useState(true);
  const handleClick = () => {
    setFace(!face);
  };
  return (
    <div>
      <div>{face ? "😁" : "😫"}</div>
      <button onClick={handleClick}>날 누르면 표정이 바뀌어요!</button>
    </div>
  );
}
