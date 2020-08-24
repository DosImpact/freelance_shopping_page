import React from "react";
import ProductCardImage from "components/Product/ProductCardImage";

import styled from "styled-components";

function ChooseNumber({ formik, name, count, width }) {
  const nowActive = formik.values[name];
  return (
    <Wrapper width={width}>
      {[
        [...Array(count).keys()].map((e, idx) => {
          return (
            <input
              onChange={formik.handleChange}
              type="radio"
              id={`${name}${e + 1}`}
              name={name}
              value={e + 1}
              key={idx}
            ></input>
          );
        }),
      ]}
      {[
        [...Array(count).keys()].map((e, idx) => {
          return (
            <label key={idx} className="label" htmlFor={`${name}${e + 1}`}>
              <ProductCardImage
                isActive={nowActive === `${e + 1}` ? true : false}
                title={`${(e + 1) * 11}"`}
                subTitle="included"
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
  /* width: 90px; */
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  & .label {
    width: ${(props) => props.width};
    transition: all 0.15s ease-out;
  }
`;
