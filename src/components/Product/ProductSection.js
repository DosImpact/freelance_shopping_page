import React, { useState } from "react";

import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";
import { down } from "styled-breakpoints";

import Box from "components/Box";

function ProductSection({ className, idx, title, children }) {
  const [isDropped, setIsDropped] = useState(true);
  const handleOnClick = (e) => {
    setIsDropped(!isDropped);
  };
  const childrenRes = React.cloneElement(children, { isDropped });

  return (
    <Wrapper isDropped={isDropped} className={className}>
      <div onClick={handleOnClick} className="mainRow">
        <div className="titleCol">
          <Box className="number">{idx}</Box>
          <div className="title">{title}</div>
        </div>
        <span className={isDropped ? "arrow dropped" : "arrow"}>
          <FaAngleDown size={20} />
        </span>
      </div>
      <div className="mainRow">{childrenRes}</div>
    </Wrapper>
  );
}

export default ProductSection;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-top: ${(props) => props.theme.borderDefault};
  /**Temp */

  & .mainRow {
    margin-bottom: 10px;
    & .number {
      width: 32px;
      height: 32px;
      background-color: ${(props) => props.theme.brownColor};
      border: none;
      color: ${(props) => props.theme.whiteColor};
      text-align: center;
      font-weight: 700;
    }
    & .titleCol {
      display: flex;
    }
    & .title {
      margin-left: 1.25em;
      display: flex;
      align-items: center;
    }
    & .arrow {
      margin-right: 1.25em;
      transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    & .dropped {
      transform: translate(0, -25%) rotate(180deg);
    }
  }

  & .mainRow:nth-child(1) {
    flex-grow: 9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0px 20px;
    margin-bottom: 1.25em;
  }
  & .mainRow:nth-child(2) {
    flex-grow: 5;
  }
  ${down("lg")} {
    display: flex;
    flex-flow: column nowrap;
  }
`;
