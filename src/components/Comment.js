import React from "react";
import styled from "styled-components";

import Avatar from "components/Avatar";
import StarRates from "components/StarRates";
import UpDownVote from "components/UpDownVote";

function Comment({
  className,
  name,
  rate,
  commentTitle,
  commentConent,
  createAt,
  like,
  disLike,
  reviewedOn,
}) {
  return (
    <Wrapper className={className}>
      <div className="comment__header">
        <div className="comment__headerLeft">
          <Avatar className="comment__avatar" />
          <div className="comment__name">
            <span className="black">{name}</span>
            <StarRates count={rate} />
          </div>
          <div className="comment__verified"></div>
        </div>
        <div className="comment__headerRight">
          <div className="comment__createAt black">{createAt}</div>
        </div>
      </div>
      <div className="comment__content">
        <div className="content__columm">
          <div className="content__title">{commentTitle}</div>
          <div className="content__content">{commentConent}</div>
        </div>
        <div className="content__columm">
          <div className="content__ment">Was This Review Helpful?</div>
          <div className="content__buttonList">
            <UpDownVote isUp count={like} />
            <UpDownVote count={disLike} />
            <div className="content__button"></div>
            <div className="content__button"></div>
          </div>
        </div>
      </div>
      <div className="comment__footer">
        <div className="comment__share"></div>
        <div className="comment__reviewedOn">
          <span>Reviewed on: </span>
          <a rel="noopener noreferrer" target="_blank" href={reviewedOn.src}>
            <span>{reviewedOn.name}</span>
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Comment;

const Wrapper = styled.div`
  padding: 35px 0px;

  & .comment__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .comment__headerLeft {
      & .comment__avatar {
      }
    }
    & .comment__headerRight {
    }
  }
  & .comment__content {
  }
  & .comment__footer {
  }
`;
