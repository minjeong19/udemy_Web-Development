import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClcker() {
  // 랜덤이모지 만들기
  const randomEmoji = () => {
    const choices = ["😀", "😁", "😉", "😙", "😎", "😌", "🥙"];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);

  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };

  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id);
    });
    console.log(id);
  };

  const updateEmoji = () => {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...e, emoji: "🎁" };
      });
    });
  };

  return (
    <div>
      {emojis.map((e) => (
        <span key={e.id} onClick={() => deleteEmoji(e.id)}>
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>이모지 추가</button>
      <button onClick={updateEmoji}>이모지 모두 변경</button>
    </div>
  );
}
