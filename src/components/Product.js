import React from "react";

import styled from "styled-components";
import { down, up } from "styled-breakpoints";

import ProductSection from "components/Product/ProductSection";
import Production from "components/Product/Production";
import ProductCardImage from "components/Product/ProductCardImage";

function Product({ className }) {
  return (
    <Wrapper className={className}>
      <div className="mainColumn"></div>
      <div className="mainColumn">
        <ProductSection idx="1" title="ChooseFabric">
          <Production className="dropdown">
            <div>DropDoion DropDn</div>
          </Production>
        </ProductSection>
        <ProductSection idx="2" title="ChooseLegs">
          <Production className="dropdown">
            <ProductCardImage title="Standard" />
          </Production>
        </ProductSection>
      </div>
    </Wrapper>
  );
}

export default Product;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  /**Temp */
  height: 80vh;
  background-color: pink;

  & .mainColumn:nth-child(1) {
    flex-grow: 9;
    background-color: pink;
  }
  & .mainColumn:nth-child(2) {
    flex-grow: 5;
    background-color: azure;
  }
  ${down("lg")} {
    display: flex;
    flex-flow: column nowrap;
  }
`;
