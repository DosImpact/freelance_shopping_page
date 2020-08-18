import React from "react";

import styled from "styled-components";

function Production({ className, children }) {
  return <SProduction className={className}>{children}</SProduction>;
}

export default Production;

const SProduction = styled.div`
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;
`;
