import React from "react";

import styled from "styled-components";
import { down } from "styled-breakpoints";

import StarRates from "components/StarRates";

function ProductProfile({ className, title, subTitle, price, total }) {
  return (
    <Wrapper className={className}>
      <div className="title">{title}</div>
      <div className="subTitle">{subTitle}</div>
      <div className="price">{price}</div>
      <div className="affirm">
        As low as $167/mo at 0% APR with <strong>Affirm</strong>
      </div>
      <div className="prequalify">Prequalify now</div>
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
  ${down("md")} {
    justify-content: center;
    align-items: center;
    /* display: none; */
  }
  & .title {
    font-size: 3.5em;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.625em 0 0.15em;
    letter-spacing: 0.2em;
    ${down("md")} {
      font-size: 2.5em;
    }
  }
  & .subTitle {
    margin: 0 0 0.5em;
    ${down("md")} {
      margin: 0 10px 0.5em;
    }
  }
  & .price {
    margin: 0 0 0.3em;
    font-size: 2em;
  }

  & .star {
    display: flex;
    & .stars {
      margin-right: 7px;
    }
  }
  & .affirm {
    font-size: 12px;
    font-weight: 300;

    & strong {
      font-weight: 700;
    }
  }
  & .prequalify {
    font-size: 14px;
    font-weight: 300;
    border-bottom: 1px solid #6fb3f2;
    color: #4f8dc1;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`;
