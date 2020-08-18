import React from "react";

import styled from "styled-components";

function Production({ className, children }) {
  return <SProduction className={className}>{children}</SProduction>;
}

export default Production;

const SProduction = styled.div`
  padding: 0px 20px;
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;

  display: flex;
  width: 100%;
`;
