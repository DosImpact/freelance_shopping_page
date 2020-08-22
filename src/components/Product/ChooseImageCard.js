import React from "react";
import ProductCard from "components/Product/ProductCard";
import styled from "styled-components";

function ChooseNumber({ formik, name, count, row = false }) {
  const nowActive = formik.values[name];
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
              <ProductCard
                row={row}
                isActive={nowActive === `${idx + 1}` ? true : false}
                imageTitle="Seafoam"
                imageContent="Performance Textured Weave"
                imageURL="https://d2cquv6wfilehq.cloudfront.net/media/swatches/medium/1597968225_wave_1.png"
              />
            </label>
          </>
        );
      })}
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
    width: 25%;
    width: ${(props) => (props.row ? "25%" : "50%")};
  }
`;
