import React from "react";

import styled from "styled-components";
import { down } from "styled-breakpoints";

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
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
  ${down("lg")} {
    justify-content: center;
    align-items: center;
  }
  & .title {
    font-size: 3.5em;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.625em 0 0.15em;
    ${down("lg")} {
      font-size: 2.5em;
    }
  }
  & .subTitle {
    margin: 0 0 0.5em;
    ${down("lg")} {
      margin: 0 10px 0.5em;
    }
  }
  & .price {
    margin: 0 0 0.3em;
    font-size: 2.5em;
  }

  & .star {
    display: flex;
    & .stars {
      margin-right: 7px;
    }
  }
`;
