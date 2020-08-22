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
      {/* <input
        onChange={formik.handleChange}
        type="radio"
        id={`${name}1`}
        name={name}
        value="1"
      ></input>
      <input
        onChange={formik.handleChange}
        type="radio"
        id={`${name}2`}
        name={name}
        value="2"
      ></input>
      <input
        onChange={formik.handleChange}
        type="radio"
        id={`${name}3`}
        name={name}
        value="3"
      ></input>
      <input
        onChange={formik.handleChange}
        type="radio"
        id={`${name}4`}
        name={name}
        value="4"
      ></input>

      <label style={{ width: "25%" }} for="legs1">
        <ProductCardImage
          isActive={formik.values?.legs === "1" ? true : false}
          title="Standard"
          subTitle="included"
          imageContent="Standard left chaise"
          imageURL="https://d2cquv6wfilehq.cloudfront.net/skin/frontend/interiordefine/default/images/depth-diagram-200420.svg"
        />
      </label>
      <label style={{ width: "25%" }} for="legs2">
        <ProductCardImage
          isActive={formik.values?.legs === "2" ? true : false}
          title="Standard"
          subTitle="included"
          imageContent="Standard left chaise"
          imageURL="https://d2cquv6wfilehq.cloudfront.net/skin/frontend/interiordefine/default/images/depth-diagram-200420.svg"
        />
      </label>
      <label style={{ width: "25%" }} for="legs3">
        <ProductCardImage
          isActive={formik.values?.legs === "3" ? true : false}
          title="Standard"
          subTitle="included"
          imageContent="Standard left chaise"
          imageURL="https://d2cquv6wfilehq.cloudfront.net/skin/frontend/interiordefine/default/images/depth-diagram-200420.svg"
        />
      </label>
      <label style={{ width: "25%" }} for="legs4">
        <ProductCardImage
          isActive={formik.values?.legs === "4" ? true : false}
          title="Standard"
          subTitle="included"
          imageContent="Standard left chaise"
          imageURL="https://d2cquv6wfilehq.cloudfront.net/skin/frontend/interiordefine/default/images/depth-diagram-200420.svg"
        />
      </label> */}
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
    width: 50%;
  }
`;
