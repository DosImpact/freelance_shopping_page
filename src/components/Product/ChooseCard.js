import React from "react";
import ProductCardImage from "components/Product/ProductCardImage";

import styled from "styled-components";

function ChooseNumber({ formik, name, count }) {
  const nowActive = formik.values[name];
  return (
    <Wrapper>
      {[
        [...Array(count).keys()].map((e, idx) => {
          return (
            <input
              onChange={formik.handleChange}
              type="radio"
              id={`${name}${e + 1}`}
              name={name}
              value={e + 1}
            ></input>
          );
        }),
      ]}
      {[
        [...Array(count).keys()].map((e, idx) => {
          return (
            <label className="label" for={`${name}${e + 1}`}>
              <ProductCardImage
                isActive={nowActive === `${e + 1}` ? true : false}
                title="Standard"
                subTitle="included"
                imageContent="Standard left chaise"
                imageURL="https://d2cquv6wfilehq.cloudfront.net/skin/frontend/interiordefine/default/images/depth-diagram-200420.svg"
              />
            </label>
          );
        }),
      ]}
    </Wrapper>
  );
}

export default ChooseNumber;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  & .label {
    /* width: 50%; */
    flex-grow: 1;
  }
  & .label:hover {
    background-color: ${(props) => props.theme.lightGreyColor};
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;
