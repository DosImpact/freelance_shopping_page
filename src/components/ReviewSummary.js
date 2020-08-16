import React from "react";

import styled from "styled-components";
import StarRates from "./StarRates";

function ReviewSummary({ className, reviewSummary }) {
  const { total, rates } = reviewSummary;
  return (
    <Wrapper className={className}>
      <h2>Read Reviews From Our Customers</h2>
      <div className="columnList">
        <div className="column">
          <StarRates count={5} />
          <span>{total} Reviews</span>
        </div>
        <div className="column">
          <div className="rateList">
            {rates.map((rate, idx) => (
              <Row rate={rate} total={total} idx={idx} key={idx} />
            ))}
          </div>
        </div>
        <div className="column"></div>
      </div>
    </Wrapper>
  );
}

export default ReviewSummary;

const Wrapper = styled.div`
  border-top: ${(props) => props.theme.borderDefault};
`;

const Row = ({ className, rate, idx, total }) => {
  const percentage = (rate / total) * 100;
  console.log(percentage);
  return (
    <ReviewRow className={className} percentage={percentage}>
      <StarRates className="stars" count={5 - idx} />
      <div className="rate">({rate})</div>
      <div className="OutterProgress">
        <div className="InnerProgress"></div>
      </div>
    </ReviewRow>
  );
};

const ReviewRow = styled.div`
  & .stars {
  }
  & .rate {
  }
  & .OutterProgress {
    width: 155px;
    height: 11px;
    background-color: ${(props) => props.theme.lightGreyColor};
  }

  & .InnerProgress {
    width: ${(props) => props.percentage}%;
    height: 11px;
    background-color: ${(props) => props.theme.brownColor};
  }
`;
