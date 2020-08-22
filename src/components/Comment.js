import React from "react";
import styled from "styled-components";
import { down, up } from "styled-breakpoints";
import { FaCheckSquare } from "react-icons/fa";

import Avatar from "components/Avatar";
import StarRates from "components/StarRates";
import UpDownVote from "components/Comment/UpDownVote";
import ReadMore from "components/ReadMore";

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
          <div className="comment__profile">
            <div className="comment__profile__">
              <span className="name black">{name}</span>
              <span className="verified">
                <FaCheckSquare
                  color="#AFA196"
                  style={{ marginRight: "10px" }}
                />
                Verified Buyer
              </span>
            </div>

            <StarRates className="star" count={rate} />
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
          <div className="content__content">
            {commentConent.length > 300 ? (
              <ReadMore text={commentConent} />
            ) : (
              commentConent
            )}
          </div>
          <div className="comment__share"></div>
        </div>
        <div className="content__columm">
          <div className="content__ment">
            <div className="ment"> Was This Review Helpful?</div>
            <div className="comment__createAt black">{createAt}</div>
          </div>
          <div className="content__buttonList">
            <UpDownVote className="button" isUp count={like} />
            <UpDownVote className="button" count={disLike} />
          </div>
        </div>
      </div>
      <div className="comment__footer">
        <div className="comment__reviewedOn">
          <span>Reviewed on: </span>
          <a rel="noopener noreferrer" target="_blank" href={reviewedOn.src}>
            <span className="brown">{reviewedOn.name}</span>
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Comment;

const Wrapper = styled.div`
  padding: 35px 0px;
  border-bottom: ${(props) => props.theme.borderDefault};
  /**header */
  & .comment__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .comment__headerLeft {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & .comment__avatar {
        margin-right: 20px;
      }

      & .comment__name {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      & .comment__profile {
        & .comment__profile__ {
          display: flex;
        }
        & .name {
          /* margin-right: 73px; */

          margin-right: 4.3em;
          ${down("sm")} {
            margin-right: 1em;
          }
        }
        & .star {
          margin-top: 10px;
        }
      }
    }
    & .comment__headerRight {
      ${down("sm")} {
        display: none;
      }
    }
  }

  /**content */
  & .comment__content {
    margin: 20px 0px 20px 100px;
    display: flex;
    justify-content: space-between;
    ${down("sm")} {
      flex-direction: column;
      margin-left: 0px;
    }
    & .content__columm:nth-child(1) {
      width: 50%;
      ${down("sm")} {
        width: 100%;
      }
    }
    & .content__columm:nth-child(2) {
      display: flex;
      flex-direction: column;
      ${down("sm")} {
        margin-top: 20px;
      }
      & .content__ment {
        display: flex;
        justify-content: space-between;
      }

      & .comment__createAt {
        ${up("sm")} {
          display: none;
        }
      }
    }
    & .content__buttonList {
      margin-top: 10px;
      display: flex;

      & .button {
        margin-left: 20px;
        ${down("sm")} {
          margin-left: 0px;
          margin-right: 20px;
        }
      }
    }
  }
  /**footer */
  & .comment__footer {
    margin-left: 100px;
    ${down("sm")} {
      margin-left: 0px;
    }
  }
`;
