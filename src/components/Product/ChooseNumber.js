import React from "react";
import ProductCardImage from "components/Product/ProductCardImage";

import styled from "styled-components";

function ChooseNumber({ formik, name }) {
  return (
    <>
      {[
        [...Array(8).keys()].map((e, idx) => {
          return (
            <Wrapper>
              <input
                onChange={formik.handleChange}
                type="radio"
                id={`${name}${e + 1}`}
                name={name}
                value={e + 1}
              ></input>
              <label style={{ width: "25%" }} for={`${name}${e + 1}`}>
                <ProductCardImage
                  isActive={formik.values?.size === `${e + 1}` ? true : false}
                  title={`${(e + 1) * 11}"`}
                  subTitle="included"
                />
              </label>
            </Wrapper>
          );
        }),
      ]}
    </>
  );
}

export default ChooseNumber;

const Wrapper = styled.div`
  width: 90px;
`;
