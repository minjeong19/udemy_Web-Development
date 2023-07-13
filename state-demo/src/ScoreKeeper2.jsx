import React, { useState } from "react";

export default function ScoreKeeper2({ numPlayers, target }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  //   const incrementScore = (idx) => {
  //     setScores((prevScores) => {
  //       const copy = [...prevScores];
  //       copy[idx] += 1;
  //       return copy;
  //     });
  //   };
  const incrementScore = (idx) => {
    if (gameOver || scores[idx] >= target) {
      return;
    }

    setScores((prevSores) => {
      const updatedScores = prevSores.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      });
      // some 주어진 조건을 찾아주는 것
      const isGameOver = updatedScores.some((s) => s >= target);
      if (isGameOver) {
        setGameOver(true);
        const winnerPlayer = updatedScores.findIndex((s) => s >= target);
        setWinner(winnerPlayer);
      }
      return updatedScores;
    });
  };

  const resetBtn = () => {
    setScores(new Array(numPlayers).fill(0));
    setGameOver(false);
    setWinner(null);
  };
  return (
    <div>
      <ul>
        {scores.map((s, index) => {
          return (
            <li key={index}>
              Player{index + 1}: {s}
              <button onClick={() => incrementScore(index)}>+1</button>
              {s >= target && index === winner && "Winner"}
            </li>
          );
        })}
      </ul>
      <button onClick={resetBtn}>Reset</button>
    </div>
  );
}
