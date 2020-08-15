import React from "react";

import styled from "styled-components";

function NavHeader({ className, navList }) {
  return (
    <Wrapper className={className}>
      <ul className="navlist">
        {navList.map((e, idx) => (
          <li className="navItem" key={idx}>
            {e}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default NavHeader;

const Wrapper = styled.div`
  height: 42px;
  border-bottom: ${(props) => props.theme.borderDefault};

  & .navlist {
    width: 100%;
    height: 100%;
    /* overflow-x: scroll; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & .navItem {
      height: 100%;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: ${(props) => props.theme.borderBrown};
    }
  }
`;
