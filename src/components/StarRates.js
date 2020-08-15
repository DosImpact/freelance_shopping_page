import React from "react";
import { FaStar } from "react-icons/fa";

const StarRates = ({ count }) => {
  const MAX_NUM = 5;
  return (
    <span>
      {[...Array(Number(count)).keys()].map((e, idx) => (
        <FaStar color="#AFA196" />
      ))}
      {[...Array(MAX_NUM - Number(count)).keys()].map((e, idx) => (
        <FaStar color="#E9EAE9" />
      ))}
    </span>
  );
};

export default StarRates;
