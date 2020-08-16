import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DetailPagePresenter from "./DetailPagePresenter";

import StarScore from "components/StarScore";

/**
 *
 * 더미 데이터
 */

const dummyComment1 = {
  name: "Karli T.",
  rate: 5,
  commentTitle: "Love our new couch.",
  commentConent:
    "Love the couch. Great to be able to make so many choices . Delivery was easy and timely. Company was great at updates .",
  createAt: "08/13/20",
  like: "5",
  disLike: "0",
  reviewedOn: {
    name: "Sloan",
    src:
      "https://www.interiordefine.com/sloan-custom-sectional-sofa-with-right-chaise?___store=default",
  },
};
const dummyComment2 = {
  name: "dumm T.",
  rate: 3,
  commentTitle: "Great to be new couch.",
  commentConent:
    "Great to be Great to bex choices . Delivery was easy and timely. Company was great at updates reat to be Great to bex choices . Delivery was easy and timely. Company was great at updates reat to be Great to bex choices . Delivery was easy and timely. Company was great at updates reat to be Great to bex choices . Delivery was easy and timely. Company was great at updates reat to be Great to bex choices . Delivery was easy and timely. Company was great at updates reat to be Great to bex choices . Delivery was easy and timely. Company was great at updates .",
  createAt: "07/10/20",
  like: "2",
  disLike: "3",
  reviewedOn: {
    name: "Sloan",
    src:
      "https://www.interiordefine.com/sloan-custom-sectional-sofa-with-right-chaise?___store=default",
  },
};

/* 데이터 */
const dummyComments = [dummyComment1, dummyComment2];

const reviewList = ["Reviews(262)"];
const reviewSummary = {
  total: 262,
  rates: [224, 34, 3, 1, 0],
};
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
function DetailPageContainer() {
  /* 리뷰 작성 폼 hanle */

  const formik = useFormik({
    initialValues: { email: "", score: "2" },
    onSubmit: (data, { setSubmitting }) => {
      setSubmitting(true);
      console.log("handleSubmit data", data);
      setSubmitting(false);
    },
    validationSchema: Yup.object().shape({
      score: Yup.string("평점 없음"),
      email: Yup.string().email("email 형식 틀림").required("required"),
    }),
  });
  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
          <StarScore
            value={formik.values.score}
            id="score"
            onChange={(c) => {
              console.log(c);
              formik.setFieldValue("score", c);
            }}
            onBlur={formik.handleBlur}
          />
             
          <button type="submit" disabled={formik.isSubmitting}>
                      Submit         
          </button>
              
          <DisplayState {...formik} />
        </form>
      </div>
      <DetailPagePresenter
        reviewList={reviewList}
        dummyComments={dummyComments}
        reviewSummary={reviewSummary}
      />
    </>
  );
}

export default DetailPageContainer;
