import React from "react";

import styled from "styled-components";

function ReviewMenu({ className, reviewList }) {
  return (
    <Wrapper className={className}>
      <ul className="reviewList">
        {reviewList.map((e, idx) => (
          <li className="reviewItem" key={idx}>
            {e}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default ReviewMenu;

const Wrapper = styled.div`
  height: 42px;
  border-bottom: ${(props) => props.theme.borderDefault};

  & .reviewList {
    width: 100%;
    height: 100%;
    /* overflow-x: scroll; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & .reviewItem {
      height: 100%;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: ${(props) => props.theme.borderBrown};
    }
  }
`;
