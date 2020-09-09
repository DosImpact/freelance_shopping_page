import React from "react";
import ProductCard from "components/Product/ProductCard";
import styled from "styled-components";
import { down } from "styled-breakpoints";

function ChooseNumber({ formik, name, count, row = false }) {
  const nowActive = formik?.values[name] ?? "1";
  // console.log(res);
  return (
    <Wrapper row={row}>
      {[...Array(count).keys()].map((e, idx) => {
        return (
          <input
            key={idx}
            onChange={(e) => {
              e.preventDefault();
              formik.handleChange(e);
            }}
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
              <ProductCard
                row={row}
                isActive={nowActive === `${idx + 1}` ? true : false}
                imageTitle="Seafoam"
                imageContent="Performance Basket Weave"
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

  ${down("md")} {
    flex-flow: row nowrap;
  }

  & .label {
    flex: 1 1 auto;
    max-width: 75px;
    min-width: 75px;
    padding: 10px 0px 7.5px 5px;

    /* width: 25%; */
    /* width: ${(props) => (props.row ? "25%" : "50%")}; */
    transition: all 0.15s ease-out;
  }
  & .label:hover {
    /* background-color: ${(props) => props.theme.hoverGreyColor}; */
    /* box-shadow: ${(props) => props.theme.boxShadow}; */
  }
`;
