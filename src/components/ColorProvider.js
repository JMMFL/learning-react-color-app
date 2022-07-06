import React, { createContext, useState } from "react";
import data from "../data/colors";
import { v4 } from "uuid";

export const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(data);

  const addColor = (name, hex) => {
    const newColors = [
      {
        id: v4(),
        rating: 0,
        name,
        hex
      },
      ...colors
    ];
    setColors(newColors);
  };

  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  const rateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
