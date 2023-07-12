import React, { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  const handlePlus = () => {
    setNum(num + 1);
  };
  const handleMinus = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <div>Counter : {num}</div>
      <button onClick={handlePlus}>더하기</button>
      <button onClick={handleMinus}>빼기</button>
    </div>
  );
}
