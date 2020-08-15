import React from "react";
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
    "Great to be Great to bex choices . Delivery was easy and timely. Company was great at updates .",
  createAt: "07/10/20",
  like: "2",
  disLike: "3",
  reviewedOn: {
    name: "Sloan",
    src:
      "https://www.interiordefine.com/sloan-custom-sectional-sofa-with-right-chaise?___store=default",
  },
};

const dummyComments = [dummyComment1, dummyComment2];

const navList = ["Reviews(262)"];

function DetailPageContainer() {
  return (
    <>
      <DetailPagePresenter navList={navList} dummyComments={dummyComments} />
    </>
  );
}

export default DetailPageContainer;
