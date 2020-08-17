import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarScore = ({ className, value = 1, onChange }) => {
  const MAX_NUM = 5;

  const [cnt, setCnt] = useState(value);
  const handleSumit = (idx) => {
    onChange(String(cnt));
    // setCnt(idx);
  };
  const handleMouseOn = (idx) => {
    setCnt(idx);
  };
  const handleMouseLeave = () => {
    setCnt(Number(value));
  };

  return (
    <div className={className}>
      {[...Array(Number(cnt)).keys()].map((e, idx) => (
        <FaStar
          key={idx}
          color="#AFA196"
          onMouseEnter={() => handleMouseOn(idx + 1)}
          onMouseLeave={() => handleMouseLeave()}
          onClick={() => handleSumit(idx + 1)}
        />
      ))}
      {[...Array(MAX_NUM - Number(cnt)).keys()].map((e, idx) => (
        <FaStar
          key={idx}
          color="#E9EAE9"
          onClick={() => handleSumit(Number(cnt) + idx + 1)}
          onMouseEnter={() => handleMouseOn(Number(cnt) + idx + 1)}
        />
      ))}
    </div>
  );
};

export default StarScore;
