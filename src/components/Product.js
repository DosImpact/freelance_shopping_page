import React from "react";

import styled from "styled-components";
import { down, up } from "styled-breakpoints";

import ProductSection from "components/Product/ProductSection";
import Production from "components/Product/Production";
import ProductCardImage from "components/Product/ProductCardImage";

function Product({ className, formik }) {
  return (
    <Wrapper className={className}>
      <div className="mainColumn"></div>
      <div className="mainColumn">
              
        <form onSubmit={formik.handleSubmit}>
          <ProductSection idx="1" title="Choose Size">
            <Production className="dropdown">
              {[
                [...Array(8).keys()].map((e, idx) => {
                  return (
                    <>
                      <input
                        onChange={formik.handleChange}
                        type="radio"
                        id={`size${e + 1}`}
                        name="size"
                        value={e + 1}
                      ></input>
                      <label style={{ width: "25%" }} for={`size${e + 1}`}>
                        <ProductCardImage
                          isActive={
                            formik.values?.size === `${e + 1}` ? true : false
                          }
                          title={`${(e + 1) * 11}"`}
                          subTitle="included"
                        />
                      </label>
                    </>
                  );
                }),
              ]}
            </Production>
          </ProductSection>

          <ProductSection idx="2" title="Choose Legs">
            <Production className="dropdown">
              <input
                onChange={formik.handleChange}
                type="radio"
                id="legs1"
                name="legs"
                value="1"
              ></input>
              <input
                onChange={formik.handleChange}
                type="radio"
                id="legs2"
                name="legs"
                value="2"
              ></input>
              <input
                onChange={formik.handleChange}
                type="radio"
                id="legs3"
                name="legs"
                value="3"
              ></input>
              <input
                onChange={formik.handleChange}
                type="radio"
                id="legs4"
                name="legs"
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
              </label>
            </Production>
          </ProductSection>

          <ProductSection idx="3" title="Choose Seat Cushions">
            <Production className="dropdown">
              <input
                onChange={formik.handleChange}
                type="radio"
                id="cushion1"
                name="cushion"
                value="1"
              ></input>
              <input
                onChange={formik.handleChange}
                type="radio"
                id="cushion2"
                name="cushion"
                value="2"
              ></input>

              <label style={{ width: "50%" }} for="cushion1">
                <ProductCardImage
                  isActive={formik.values?.cushion === "1" ? true : false}
                  title="Standard"
                  subTitle="included"
                  imageContent="Standard left chaise"
                  imageURL="https://d2cquv6wfilehq.cloudfront.net/skin/frontend/interiordefine/default/images/depth-diagram-200420.svg"
                />
              </label>
              <label style={{ width: "50%" }} for="cushion2">
                <ProductCardImage
                  isActive={formik.values?.cushion === "2" ? true : false}
                  title="Standard"
                  subTitle="included"
                  imageContent="Standard left chaise"
                  imageURL="https://d2cquv6wfilehq.cloudfront.net/skin/frontend/interiordefine/default/images/depth-diagram-200420.svg"
                />
              </label>
            </Production>
          </ProductSection>

          <ProductSection idx="4" title="Choose Cushion Fill">
            <Production className="dropdown">
              <input
                onChange={formik.handleChange}
                type="radio"
                id="cushion1"
                name="cushion"
                value="1"
              ></input>
              <input
                onChange={formik.handleChange}
                type="radio"
                id="cushion2"
                name="cushion"
                value="2"
              ></input>

              <label style={{ width: "50%" }} for="cushion1">
                <ProductCardImage
                  isActive={formik.values?.cushion === "1" ? true : false}
                  title="Standard"
                  subTitle="included"
                  imageContent="Standard left chaise"
                  imageURL="https://d2cquv6wfilehq.cloudfront.net/skin/frontend/interiordefine/default/images/pdp-cushions.svg?24022020v2"
                />
              </label>
              <label style={{ width: "50%" }} for="cushion2">
                <ProductCardImage
                  isActive={formik.values?.cushion === "2" ? true : false}
                  title="Standard"
                  subTitle="included"
                  imageContent="Standard left chaise"
                  imageURL="https://d2cquv6wfilehq.cloudfront.net/skin/frontend/interiordefine/default/images/pdp-cushions.svg?24022020v2"
                />
              </label>
            </Production>
          </ProductSection>

          <ProductSection idx="5" title="Choose Legs">
            <Production className="dropdown">
              <div style={{ width: "100%" }}>
                <ul
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    overflowY: "hidden",
                    overflowX: "scroll",
                  }}
                >
                  <li style={{ flex: "185px 0 0" }}>ITEM</li>
                  <li style={{ flex: "185px 0 0" }}>ITEM</li>
                  <li style={{ flex: "185px 0 0" }}>ITEM</li>
                  <li style={{ flex: "185px 0 0" }}>ITEM</li>
                  <li style={{ flex: "185px 0 0" }}>ITEM</li>
                  <li style={{ flex: "185px 0 0" }}>ITEM</li>
                  <li style={{ flex: "185px 0 0" }}>ITEM</li>
                  <li style={{ flex: "185px 0 0" }}>ITEM</li>
                  <li style={{ flex: "185px 0 0" }}>ITEM</li>
                  <li style={{ flex: "185px 0 0" }}>ITEM</li>
                </ul>
              </div>
            </Production>
          </ProductSection>
          <button type="submit">제출</button>
        </form>
      </div>
    </Wrapper>
  );
}
//

export default Product;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  /**Temp */
  /* height: 80vh; */

  & .mainColumn:nth-child(1) {
    flex-grow: 9;
    background-color: azure;
  }
  & .mainColumn:nth-child(2) {
    flex-grow: 5;
  }
  ${down("lg")} {
    display: flex;
    flex-flow: column nowrap;
  }

  & input {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;
