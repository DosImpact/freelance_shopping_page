import React, { useState } from "react";

import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";
import { down } from "styled-breakpoints";

import Box from "components/Box";

function ProductSection({ className, idx, title, children }) {
  const [isDropped, setIsDropped] = useState(false);
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
  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: ${(props) => (props.isDropped ? null : props.theme.boxShadow)};
    background-color: ${(props) =>
      props.isDropped ? null : props.theme.hoverGreyColor};
  }
  & .mainRow {
    margin-bottom: 5px;
    & .number {
      width: 30px;
      height: 30px;
      border-radius: 10px;
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
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    & .dropped {
      transform: translate(0, -25%) rotate(180deg);
    }
  }

  & .mainRow:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px 0px 20px;
    margin-bottom: 0.8em;
  }
  & .mainRow:nth-child(2) {
    margin-bottom: 10px;
  }
  ${down("md")} {
    display: flex;
    flex-flow: column nowrap;
  }
`;
