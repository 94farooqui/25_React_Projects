import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfstars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover,setHover] = useState(0)

  const handleHover = (selectedStarIndex) => {
    console.log(selectedStarIndex)
    setHover(selectedStarIndex)
  };
  const handleMouseLeave = () => {
    setHover(rating)
  };

  const handleStarClick = (selectedStarIndex) => {
    setRating(selectedStarIndex);
  };
  return (
    <div className="flex gap-2">
      {[...Array(noOfstars)].map((_, index) => {
        index += 1;
        return (
          <div
            key={index}
            onMouseMove={()=>handleHover(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleStarClick(index)}
            className={`${index <=  hover ? "bg-yellow-300" : "#bg-black"} w-32 h-32 rounded-full border hover:bg-yellow-300`}
          ></div>
        );
      })}
    </div>
  );
};

export default StarRating;
