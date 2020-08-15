import React from "react";
import styled from "styled-components";

function Comment({ className, name, rate, commentTitle, commentConent }) {
  return (
    <Wrapper className={className}>
      <div className="comment__header"></div>
      <div className="comment__content"></div>
      <div className="comment__footer"></div>
      {name}
    </Wrapper>
  );
}

export default Comment;

const Wrapper = styled.div`
  padding: 35px 0px;
`;
