import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import useColors from "../hooks/useColors";

export default function Color({ id, name, hex, rating }) {
  const { rateColor, removeColor } = useColors();

  return (
    <div className="container">
      <h1>{name}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash color="grey" />
      </button>
      <div className="color" style={{ background: hex }}></div>
      <StarRating
        id={id}
        rating={rating}
        totalStars={5}
        onRate={(rating) => rateColor(id, rating)}
      />
    </div>
  );
}
