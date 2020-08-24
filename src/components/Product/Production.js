import React from "react";

import styled from "styled-components";

function Production({ className, children, isDropped }) {
  // console.log("props", props);
  return (
    <SProduction className={className} isDropped={isDropped}>
      {children}
    </SProduction>
  );
}

export default Production;

const SProduction = styled.div`
  width: 100%;
  padding: 0px 20px;
  /* padding-bottom: 20px; */
  max-height: ${(props) => (props.isDropped ? "1400px" : "0")};
  /* padding-bottom: ${(props) => (props.isDropped ? "20px" : "0")}; */
  transition: max-height 0.5s ease-out;
  /* transition: padding 0.1s ease-out; */
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
`;
