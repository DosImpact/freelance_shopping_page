import React from "react";

import styled from "styled-components";
import { down, up } from "styled-breakpoints";

import {
  FaTruck,
  FaSmile,
  FaCartArrowDown,
  FaAngleRight,
} from "react-icons/fa";

import Button from "components/Button";
import Box from "components/Box";

import ProductSection from "components/Product/ProductSection";
import Production from "components/Product/Production";
import ProductProfile from "components/Product/ProductProfile";
import ChooseNumber from "components/Product/ChooseNumber";
import ChooseCard from "components/Product/ChooseCard";
import ChooseImageCard from "components/Product/ChooseImageCard";

import ViewPlugin from "components/ViewPlugin/ViewPlugin";
import ScrollBox from "./Product/ScrollBox";

function Product({ className, formik, editorFormik }) {
  return (
    <Wrapper className={className}>
      <div className="mainColumn">
        <ProductProfile
          className="profileInTop"
          price="$2995"
          total="5"
          title="SLOAN"
          subTitle="3-Piece U-Sectional"
        />
        <img
          alt="상품이미지"
          className="sampleImage"
          src="https://i.pinimg.com/originals/9b/66/0c/9b660c3c79e2c630c14a216214023e90.jpg"
        ></img>
        <ViewPlugin editorFormik={editorFormik} />
      </div>
      <div className="mainColumn">
        <ProductProfile
          className="profileInOption"
          price="$2995"
          total="5"
          title="SLOAN"
          subTitle="3-Piece U-Sectional"
        />
        {/*      
      - Detail page choose options

        fabric
        legs
        size
        totalDepth
        leftChaiseLength
        rightChaiseLength
        cushions
        cushionFill
 */}

        <form className="options" onSubmit={formik.handleSubmit}>
          <ProductSection idx="1" title="Choose Fabric">
            <Production>
              <ScrollBox>
                <ChooseImageCard
                  formik={formik}
                  name="fabric"
                  row={true}
                  count={25}
                />
              </ScrollBox>
            </Production>
          </ProductSection>
          <ProductSection idx="2" title="Choose legs">
            <Production>
              <ScrollBox>
                <ChooseImageCard formik={formik} name="legs" count={7} />
              </ScrollBox>
            </Production>
          </ProductSection>

          <ProductSection idx="3" title="Choose Size">
            <Production>
              <ChooseNumber width="25%" formik={formik} name="size" count={8} />
            </Production>
          </ProductSection>

          <ProductSection idx="4" title="Choose totalDepth">
            <Production>
              <ChooseCard formik={formik} name="totalDepth" count={2} />
            </Production>
          </ProductSection>

          <ProductSection idx="5" title="Choose leftChaiseLength">
            <Production>
              <ChooseCard formik={formik} name="leftChaiseLength" count={2} />
            </Production>
          </ProductSection>

          <ProductSection idx="6" title="Choose rightChaiseLength">
            <Production>
              <ChooseCard formik={formik} name="rightChaiseLength" count={2} />
            </Production>
          </ProductSection>

          <ProductSection idx="7" title="Choose cushions">
            <Production>
              <ChooseNumber
                width="50%"
                formik={formik}
                name="cushions"
                count={2}
              />
            </Production>
          </ProductSection>

          <ProductSection idx="8" title="Choose cushionFill">
            <Production>
              <ChooseCard formik={formik} name="cushionFill" count={3} />
            </Production>
          </ProductSection>

          {/* <button type="submit">제출</button> */}
        </form>

        <div className="payContainer01">
          <div className="ButtonMentOutterContainer">
            <Button
              className="Button"
              onClick={() => {
                console.log("purchaseFormik", formik.values);
              }}
            >
              <div className="buttonColumn">
                <span className="w7 sll">$2995</span>
              </div>
              <div className="buttonColumn">
                <FaCartArrowDown size={24} />
                <span className="addCart">Add to Cart</span>
              </div>
            </Button>
            <Button className="Button">As low as $167/mo with Affirm</Button>
          </div>

          <div className="delivered">
            Orders are typically delivered in 10–14 weeks.
          </div>
        </div>

        <div className="payContainer02">
          <div className="BoxMentOutterContainer">
            <Box pointer className="BoxMent">
              <div className="BoxMentContainer">
                <FaTruck size={24} />
                <span>Shipping starting at $149</span>
                <FaAngleRight size={24} />
              </div>
            </Box>
            <Box pointer className="BoxMent">
              <div className="BoxMentContainer">
                <FaSmile size={24} />
                <span>60-day returns</span>
                <FaAngleRight size={24} />
              </div>
            </Box>
          </div>
        </div>
      </div>

      <div className="mainColumn">
        <div
          style={{
            fontSize: 108,
            textAlign: "center",
            backgroundColor: "pink",
            height: "40vh",
          }}
        >
          에디터 영역
        </div>
      </div>
    </Wrapper>
  );
}
//

export default Product;

const Wrapper = styled.div`
  /* display: flex; */
  /* flex-flow: row wrap; */
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 70px;
  display: grid;
  grid-template-areas:
    "col1 col2"
    "col3 col2"
    "col4 col2";
  grid-template-columns: auto 470px;
  grid-template-rows: auto auto;
  ${down("lg")} {
    grid-template-columns: auto 380px;
  }
  padding-bottom: 100px;
  background-color: ${(props) => props.theme.whiteColor};
  ${down("md")} {
    grid-template-areas:
      "col1"
      "col2"
      "col3"
      "col4";
  }
  & .mainColumn:nth-child(1) {
    grid-area: col1;
    ${up("lg")} {
      & .profileInTop {
        display: none;
      }
    }
  }
  & .mainColumn:nth-child(2) {
    grid-area: col2;
    background-color: ${(props) => props.theme.yellowColor};
    padding: 10%;

    ${down("lg")} {
      padding: 5%;
    }
    ${down("md")} {
      max-width: unset;
      padding: 0px 0px 60px;
      & .profileInOption {
        display: none;
        padding: 5%;
      }
    }
  }
  & .mainColumn:nth-child(3) {
    grid-area: col3;
  }
  ${down("md")} {
    display: flex;
    flex-flow: column nowrap;
  }
  & .options {
    background-color: white;
    border: ${(props) => props.theme.borderDefault};
    border-radius: 20px;
    ${down("md")} {
      border-right: 0px;
      border-left: 0px;
      border-radius: 0px;
    }
    & > div:first-child {
      border-top: none;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      ${down("md")} {
        border: 0px;
        border-radius: 0px;
      }
    }
    & > div:last-child {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      ${down("md")} {
        border: 0px;
        border-radius: 0px;
      }
    }
  }

  & .delivered {
    margin: 20px 0px;
    text-align: center;
  }
  & .payContainer01 {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  & .payContainer02 {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    ${down("md")} {
      font-size: 12px;
      max-width: 300px;
      margin: 0 auto;
    }
  }
  & .ButtonMentOutterContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    & .Button {
      width: 100%;
      height: 60px;
      margin: 10px 0px;
      background-color: ${(props) => props.theme.greyColor};
      color: ${(props) => props.theme.whiteColor};
      max-width: 380px;
      padding: 0px;
    }
    & .Button:nth-child(1) {
      display: flex;
      flex-flow: row nowrap;
      & .buttonColumn:nth-child(1) {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        background-color: #3d3d3d;
        width: 40%;
        border-top-left-radius: ${(props) => props.theme.borderRadius};
        border-bottom-left-radius: ${(props) => props.theme.borderRadius};
        height: 58px;
      }
      & .buttonColumn:nth-child(2) {
        width: 60%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        height: 58px;

        & .addCart {
          margin-left: 10%;
        }
      }
    }
    & .Button:nth-child(2) {
      background-color: ${(props) => props.theme.brownColor};
    }
  }

  & .BoxMentOutterContainer {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    & .BoxMent {
      height: 50px;
      width: 100%;
      background-color: ${(props) => props.theme.yellowColor};
    }

    & .BoxMentContainer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 20px;
      font-size: 12px;
      ${down("md")} {
        font-size: 12px;
      }
    }
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
`;
