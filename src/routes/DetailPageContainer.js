import React from "react";
import DetailPagePresenter from "./DetailPagePresenter";
/**
 *
 * 더미 데이터
 */

const dummyComment = {
  name: "Karli T.",
  rate: 5,
  commentTitle: "Love our new couch.",
  commentConent:
    "Love the couch. Great to be able to make so many choices . Delivery was easy and timely. Company was great at updates .",
};

const dummyComments = [dummyComment, dummyComment];

const navList = ["Reviews(262)"];

function DetailPageContainer() {
  return (
    <>
      <DetailPagePresenter navList={navList} dummyComments={dummyComments} />
    </>
  );
}

export default DetailPageContainer;
