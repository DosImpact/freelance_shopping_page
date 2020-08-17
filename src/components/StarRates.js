import React from "react";
import { FaStar } from "react-icons/fa";

const StarRates = ({ className, count }) => {
  const MAX_NUM = 5;
  return (
    <div className={className}>
      {[...Array(Number(count)).keys()].map((e, idx) => (
        <FaStar key={idx} color="#AFA196" />
      ))}
      {[...Array(MAX_NUM - Number(count)).keys()].map((e, idx) => (
        <FaStar key={idx} color="#E9EAE9" />
      ))}
    </div>
  );
};

export default StarRates;
