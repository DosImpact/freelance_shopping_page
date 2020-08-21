import React from "react";

import styled from "styled-components";
import { down, up } from "styled-breakpoints";

import ProductSection from "components/Product/ProductSection";
import Production from "components/Product/Production";
import ProductCardImage from "components/Product/ProductCardImage";
import ChooseNumber from "components/Product/ChooseNumber";
import ProductProfile from "components/Product/ProductProfile";

function Product({ className, formik }) {
  return (
    <Wrapper className={className}>
      <div className="mainColumn">
        <img
          className="sampleImage"
          src="https://i.pinimg.com/originals/9b/66/0c/9b660c3c79e2c630c14a216214023e90.jpg"
        ></img>
      </div>
      <div className="mainColumn">
        <ProductProfile
          price="$2995"
          total="5"
          title="SLOAN"
          subtitle="3-Piece U-Sectional"
        />
              
        <form onSubmit={formik.handleSubmit}>
          <ProductSection idx="1" title="Choose Size">
            <Production className="dropdown production01">
              <ChooseNumber formik={formik} name="size" />
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
                id="chaise1"
                name="chaise"
                value="1"
              ></input>
              <input
                onChange={formik.handleChange}
                type="radio"
                id="chaise2"
                name="chaise"
                value="2"
              ></input>

              <label style={{ width: "50%" }} for="chaise1">
                <ProductCardImage
                  isActive={formik.values?.chaise === "1" ? true : false}
                  title="Standard"
                  subTitle="included"
                  imageContent="Standard left chaise"
                  imageURL="https://d2cquv6wfilehq.cloudfront.net/skin/frontend/interiordefine/default/images/depth-diagram-200420.svg"
                />
              </label>
              <label style={{ width: "50%" }} for="chaise2">
                <ProductCardImage
                  isActive={formik.values?.chaise === "2" ? true : false}
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
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  ${down("lg")} {
    max-width: unset;
  }
  & .mainColumn:nth-child(1) {
    flex-grow: 9;
    background-color: azure;
    ${down("lg")} {
    }
  }
  & .mainColumn:nth-child(2) {
    flex-grow: 5;
    max-width: 500px;
    ${down("lg")} {
      max-width: unset;
    }
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

  & .sampleImage {
    width: 100%;
  }

  /* 다른 컴포넌트로 분리하기 */

  & .production01 {
    display: flex;
    flex-flow: row wrap;
    flex-wrap: wrap;
  }
`;
