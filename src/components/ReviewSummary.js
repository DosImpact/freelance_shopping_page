import React from "react";

import styled from "styled-components";

import StarScore from "components/StarScore";
import StarRates from "./StarRates";

function ReviewSummary({ className, reviewSummary, formik }) {
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
      <div className="reviewFrom">
        <form onSubmit={formik.handleSubmit}>
          <StarScore
            value={formik.values.score}
            id="score"
            onChange={(c) => {
              console.log(c);
              formik.setFieldValue("score", c);
            }}
            onBlur={formik.handleBlur}
          />
            <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
            <label htmlFor="reviews">reviews</label>
          <input
            type="text"
            id="reviews"
            value={formik.values.reviews}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
            <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
            <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
             
          <button type="submit" disabled={formik.isSubmitting}>
            Submit         
          </button>
          <DisplayState {...formik} />
        </form>
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
