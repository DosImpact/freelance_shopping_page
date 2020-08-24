import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DetailPagePresenter from "./DetailPagePresenter";

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
const reviewsWrite = {
  total: 262,
  rates: [224, 34, 3, 1, 0],
};

function DetailPageContainer() {
  /* 리뷰 작성 폼 hanle */

  const reviewFormik = useFormik({
    initialValues: { email: "", score: "2" },
    onSubmit: (data, { setSubmitting }) => {
      setSubmitting(true);
      console.log("handleSubmit reviewFormik data", data);
      setSubmitting(false);
    },
    validationSchema: Yup.object().shape({
      score: Yup.string().required("평점을 입력해 주세요."),
      title: Yup.string().required("제목을 입력해 주세요."),
      reviews: Yup.string().required("리뷰를 입력해 주세요."),
      name: Yup.string().required("이름을 입력해 주세요."),
      email: Yup.string()
        .email("유효하지 않은 이메일 입니다.")
        .required("이메일을 입력해 주세요."),
    }),
  });
  const purchaseFormik = useFormik({
    initialValues: {
      fabric: "1",
      legs: "1",
      size: "1",
      totalDepth: "1",
      leftChaiseLength: "1",
      rightChaiseLength: "1",
      cushions: "1",
      cushionFill: "1",
    },
    onSubmit: (data, { setSubmitting }) => {
      setSubmitting(true);
      console.log("handleSubmit purchaseFormik data", data);
      setSubmitting(false);
    },
  });

  const editorFormik = useFormik({
    initialValues: {
      rotate: "1",
    },
    onSubmit: (data, { setSubmitting }) => {
      setSubmitting(true);
      console.log("handleSubmit purchaseFormik data", data);
      setSubmitting(false);
    },
  });

  return (
    <>
      <DetailPagePresenter
        reviewList={reviewList}
        dummyComments={dummyComments}
        reviewsWrite={reviewsWrite}
        reviewFormik={reviewFormik}
        purchaseFormik={purchaseFormik}
        editorFormik={editorFormik}
      />
    </>
  );
}

export default DetailPageContainer;
