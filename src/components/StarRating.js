import React from "react";
import Star from "./Star";

export default function StarRating({
  rating = 1,
  totalStars = 5,
  onRate = (f) => f
}) {
  return (
    <div className="container">
      {createArray(totalStars).map((_, index) => {
        return (
          <Star
            key={index}
            size="22px"
            selected={rating > index}
            onSelect={() => onRate(index + 1)}
          />
        );
      })}
      <p>
        {rating} of {totalStars}
      </p>
    </div>
  );
}

function createArray(length) {
  return Array(length).fill(0);
}
