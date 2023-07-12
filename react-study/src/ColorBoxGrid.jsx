import React from "react";
import ColorBox from "./ColorBox";

export default function ColorBoxGrid({ colors }) {
  const boxes = [];
  for (let i = 0; i < 15; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }
  return <div>{boxes}</div>;
}
