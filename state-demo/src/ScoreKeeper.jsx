import React, { useState } from "react";

export default function ScoreKeeper() {
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
  const plusP1Score = () => {
    setScores((oldScores) => {
      return { ...oldScores, p1Score: oldScores.p1Score + 1 };
    });
  };
  const plusP2Score = () => {
    setScores((oldScores) => {
      return { ...oldScores, p2Score: oldScores.p2Score + 1 };
    });
  };
  return (
    <div>
      <p>Playes 1: {scores.p1Score}</p>
      <p>Playes 2: {scores.p2Score}</p>
      <button onClick={plusP1Score}>+1 Player 1</button>
      <button onClick={plusP2Score}>+1 Player 2</button>
    </div>
  );
}

// 메모리 안에서 동일한 원본 오브젝트라면 리액트는 변화를 알아차리지 못함
