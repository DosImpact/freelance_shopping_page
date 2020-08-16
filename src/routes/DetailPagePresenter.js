import React from "react";
import styled from "styled-components";
import { up, only, down, between } from "styled-breakpoints";

import NavHeader from "components/NavHeader";
import Comment from "components/Comment";

function DetailPagePresenter({ dummyComments, navList }) {
  return (
    <OutterContainer>
      <InnerContainer>
        <div className="comments">
          <NavHeader navList={navList} />
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
        <div kimchi="good">TEST</div>
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

  [kimchi="good"] {
    background-color: blanchedalmond;

    ${up("xl")} {
      background-color: pink;
    }
    ${only("lg")} {
      background-color: aliceblue;
    }
    ${only("md")} {
      background-color: aqua;
    }
    ${only("sm")} {
      background-color: brown;
    }
  }
`;

export default DetailPagePresenter;
