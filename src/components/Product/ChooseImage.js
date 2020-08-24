import React from "react";
import ProductImage from "components/Product/ProductImage";
import styled from "styled-components";

function ChooseImage({ formik, name, count, row = false }) {
  const nowActive = formik?.values[name] ?? "1";
  // console.log(res);
  return (
    <Wrapper row={row}>
      {[...Array(count).keys()].map((e, idx) => {
        return (
          <input
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
            <label className="label" for={`${name}${idx + 1}`}>
              <ProductImage
                row={row}
                isActive={nowActive === `${idx + 1}` ? true : false}
                imageURL="https://d2cquv6wfilehq.cloudfront.net/media/swatches/medium/1597968225_wave_1.png"
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
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  & .label {
    width: 25%;
    width: ${(props) => (props.row ? "25%" : "50%")};
    transition: all 0.15s ease-out;
  }
  & .label:hover {
    /* background-color: ${(props) => props.theme.hoverGreyColor}; */
    /* box-shadow: ${(props) => props.theme.boxShadow}; */
  }
`;
