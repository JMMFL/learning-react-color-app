import React from "react";
import useColors from "../hooks/useColors";
import Color from "./Color";

export default function ColorList() {
  const { colors } = useColors();

  if (!colors) return <h1>No Colors Found</h1>;
  return colors.map((color, index) => <Color key={index} {...color} />);
}
