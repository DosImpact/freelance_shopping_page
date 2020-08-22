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
  /* max-height: 0; */
  max-height: ${(props) => (props.isDropped ? "1400px" : "0")};
  transition: max-height 0.15s ease-out;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
`;
