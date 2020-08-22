import React from "react";
import styled from "styled-components";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const UpDownVote = ({ className, isUp, handleClick, count }) => {
  return (
    <Wrapper className={className}>
      <div className="circle__wrapper" onClick={handleClick}>
        {isUp ? <FaThumbsUp /> : <FaThumbsDown />}
        <div> {count}</div>
      </div>
    </Wrapper>
  );
};

export default UpDownVote;

const Wrapper = styled.div`
  width: 60px;
  height: 60px;
  color: ${(props) => props.theme.greyColor};
  & .circle__wrapper {
    padding: 10px;
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-radius: 50%;
    border: ${(props) => props.theme.borderDefault};
    transition: all 0.3s linear;
  }
  & .circle__wrapper:hover {
    background-color: ${(props) => props.theme.lightGreyColor};
  }
`;
