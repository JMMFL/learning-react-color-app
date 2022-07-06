import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ size, selected, onSelect }) {
  return (
    <FaStar size={size} color={selected ? "blue" : "pink"} onClick={onSelect} />
  );
}
