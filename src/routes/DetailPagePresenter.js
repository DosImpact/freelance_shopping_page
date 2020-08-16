import React from "react";
import styled from "styled-components";

import ReviewSummary from "components/ReviewSummary";
import ReviewHeader from "components/ReviewHeader";
import Comment from "components/Comment";

function DetailPagePresenter({
  dummyComments,
  reviewList,
  reviewSummary,
  formik,
}) {
  return (
    <OutterContainer>
      <InnerContainer>
        <div className="comments">
          <ReviewSummary reviewSummary={reviewSummary} formik={formik} />
          <ReviewHeader reviewList={reviewList} />
          <div className="comments__List">
            {dummyComments.map((e, idx) => (
              <Comment
                key={idx}
                className="comment__item"
                name={e.name}
                rate={e.rate}
                commentTitle={e.commentTitle}
                commentConent={e.commentConent}
                createAt={e.createAt}
                like={e.like}
                disLike={e.disLike}
                reviewedOn={e.reviewedOn}
              />
            ))}
          </div>
        </div>
      </InnerContainer>
    </OutterContainer>
  );
}

const OutterContainer = styled.div``;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  padding: 0px 20px;

  & .comments__header {
  }
  & .comments__List {
    & .comment__item {
    }
  }
`;

export default DetailPagePresenter;
