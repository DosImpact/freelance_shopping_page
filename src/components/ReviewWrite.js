import React from "react";

import styled from "styled-components";
import TextArea from "components/TextArea";
import Input from "components/Input";
import Button from "components/Button";
import StarScore from "components/StarScore";
import StarRates from "./StarRates";

function ReviewWrite({ className, reviewsWrite, formik }) {
  const { total, rates } = reviewsWrite;
  return (
    <Wrapper className={className}>
      <h2 className="title">Read Reviews From Our Customers</h2>
      <div className="columnList">
        <div className="column">
          <div className="star">
            <StarRates className="stars" count={5} />
            <span>{total} Reviews</span>
          </div>
          <div>
            <Button className="buttonReview">Write A Review</Button>
          </div>
        </div>

        <div className="column">
          <div className="rateList">
            {rates.map((rate, idx) => (
              <Row
                className="rateItem"
                rate={rate}
                total={total}
                idx={idx}
                key={idx}
              />
            ))}
          </div>
        </div>

        <div className="column">
          {/* <div>
            <Button>Write A Review</Button>
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
}

export default ReviewWrite;

const Wrapper = styled.div`
  border-top: ${(props) => props.theme.borderDefault};

  & .title {
    padding: 56px 0px 22px;
  }

  & .columnList {
    display: flex;
    width: 100%;
  }
  & .column {
    & .rateList {
      display: flex;
      flex-direction: column;
    }

    & .rateItem {
      display: flex;
    }

    & .star {
      display: flex;
      & .stars {
        margin-right: 7px;
      }
    }

    & .buttonReview {
      margin-top: 30px;
      width: 80%;
    }
  }

  & .column:nth-child(1) {
    /* flex: 255px 255px 255px; */
    width: 255px;
    display: flex;
    flex-direction: column;
  }
  & .column:nth-child(2) {
  }
  & .column:nth-child(3) {
  }
`;

const Row = ({ className, rate, idx, total }) => {
  const percentage = (rate / total) * 100;
  return (
    <ReviewRow className={className} percentage={percentage}>
      <StarRates className="stars" count={5 - idx} />
      <div className="rate">( {rate} )</div>
      <div className="ProgressContainer">
        <div className="OutterProgress">
          <div className="InnerProgress"></div>
        </div>
      </div>
    </ReviewRow>
  );
};

const ReviewRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 23px;

  & .stars {
    width: 80px;
  }
  & .rate {
    flex: 1 2 40px;
  }
  & .ProgressContainer {
    margin-left: 5px;
    flex: 1 1 50px;
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

const DisplayState = (props) => {
  return (
    <div>
      <pre
        style={{
          backgroundColor: "#f6f8fa",
          padding: ".5rem",
          fontSize: "1rem",
        }}
      >
         <strong>props </strong> = {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
};
