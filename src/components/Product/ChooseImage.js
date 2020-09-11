import React from "react";
import ProductImage from "components/Product/ProductImage";
import styled from "styled-components";

function ChooseImage({ className, formik, name, count, row = false }) {
  const nowActive = formik?.values[name] ?? "1";
  // console.log(res);
  return (
    <Wrapper row={row} className={className}>
      {[...Array(count).keys()].map((e, idx) => {
        return (
          <input
            key={idx}
            onChange={formik.handleChange}
            type="radio"
            id={`${name}${idx + 1}`}
            name={name}
            value={idx + 1}
          ></input>
        );
      })}
      {[...Array(count).keys()].map((e, idx) => {
        return (
          <>
            <label className="label" htmlFor={`${name}${idx + 1}`} key={idx}>
              <ProductImage
                row={row}
                isActive={nowActive === `${idx + 1}` ? true : false}
                imageURL="https://content.cylindo.com/api/v2/4472/products/YF2013-XH-US/frames/7/YF2013-XH-US.JPG?background=FFFFFF&feature=1:BI-132&feature=2:LEG001-1&feature=CUSHIONS:STANDARD&feature=SOFA%20DEPTH:36&feature=CHAISE%20LENGTH:63&size=128"
              />
            </label>
          </>
        );
      })}
    </Wrapper>
  );
}

export default ChooseImage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & input {
    display: none;
  }

  & .label {
    transition: background 0.15s ease-out;
    transition: border 0.15s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
