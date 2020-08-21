import React from "react";

import styled from "styled-components";
import { down } from "styled-breakpoints";

import Button from "components/Button";
import StarRates from "components/StarRates";

function ProductProfile({ title, subTitle, price, total }) {
  return (
    <Wrapper>
      <div className="title">{title}</div>
      <div className="subTitle">{subTitle}</div>
      <div className="price">{price}</div>
      <div className="star">
        <StarRates className="stars" count={5} />
        <span>{total} Reviews</span>
      </div>
    </Wrapper>
  );
}

export default ProductProfile;

const Wrapper = styled.div`
  width: 90px;

  & .star {
    display: flex;
    & .stars {
      margin-right: 7px;
      ${down("sm")} {
        margin-bottom: 17px;
      }
    }
  }
`;
