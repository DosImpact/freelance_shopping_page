import React from "react";
import styled from "styled-components";
import Avatar from "components/Avatar";

import { FaStar } from "react-icons/fa";

const UpDownVote = ({ isUp, handleClick, handleOnChange, count }) => {
  return <div></div>;
};

const StarRates = ({ count }) => {
  const MAX_NUM = 5;
  return (
    <span>
      {[...Array(Number(count)).keys()].map((e, idx) => (
        <FaStar color="#AFA196" />
      ))}
      {[...Array(MAX_NUM - Number(count)).keys()].map((e, idx) => (
        <FaStar color="#E9EAE9" />
      ))}
    </span>
  );
};

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
            <span>{name}</span>
            <StarRates count={rate} />
          </div>
          <div className="comment__verified"></div>
        </div>
        <div className="comment__headerRight">
          <div className="comment__createAt">{createAt}</div>
        </div>
      </div>
      <div className="comment__content">
        <div className="content__columm">
          <div className="content__title"></div>
          <div className="content__content"></div>
        </div>
        <div className="content__columm">
          <div className="content__ment">Was This Review Helpful?</div>
          <div className="content__buttonList">
            <div className="content__button"></div>
            <div className="content__button"></div>
          </div>
        </div>
      </div>
      <div className="comment__footer">
        <div className="comment__share"></div>
        <div className="comment__reviewedOn"></div>
      </div>
      {name}
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
