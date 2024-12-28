import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingsProps {
  ratings: number;
}

const StarRatings: React.FC<StarRatingsProps> = ({ ratings }) => {
  return (
    <div className="flex gap-1">
      {Array(5)
        .fill(null)
        .map((__, i) => (
          <FaStar key={i} fill={i < ratings ? "orange" : "#E0E0E0"} />
        ))}
    </div>
  );
};

export default StarRatings;
