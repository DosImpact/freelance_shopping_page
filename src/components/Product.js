import React from "react";

import styled from "styled-components";
import { down } from "styled-breakpoints";

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

function Product({ className, formik }) {
  return (
    <Wrapper className={className}>
      <div className="mainColumn">
        <img
          alt="상품이미지"
          className="sampleImage"
          src="https://i.pinimg.com/originals/9b/66/0c/9b660c3c79e2c630c14a216214023e90.jpg"
        ></img>
      </div>
      <div className="mainColumn">
        <ProductProfile
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
        <form onSubmit={formik.handleSubmit}>
          <ProductSection idx="1" title="Choose Fabric">
            <Production>
              <ChooseImageCard
                formik={formik}
                name="fabric"
                row={true}
                count={5}
              />
            </Production>
          </ProductSection>
          <ProductSection idx="2" title="Choose legs">
            <Production>
              <ChooseImageCard formik={formik} name="legs" count={7} />
            </Production>
          </ProductSection>

          <ProductSection idx="3" title="Choose Size">
            <Production>
              <ChooseNumber formik={formik} name="size" count={8} />
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
              <ChooseNumber formik={formik} name="cushions" count={2} />
            </Production>
          </ProductSection>

          <ProductSection idx="8" title="Choose cushionFill">
            <Production>
              <ChooseCard formik={formik} name="cushionFill" count={3} />
            </Production>
          </ProductSection>

          {/* <button type="submit">제출</button> */}
        </form>

        <div className="payContainer">
          <div className="ButtonMentOutterContainer">
            <Button className="ButtonMent">
              <div className="ButtonMentContainer">
                <span>{JSON.stringify(Object.values(formik.values))}</span>
                <span>ADD to Cart</span>
                <FaCartArrowDown size={24} />
              </div>
            </Button>
            <Button className="ButtonMent">As low as to Cart</Button>
          </div>

          <div className="delivered">
            Orders are typically delivered in 10–14 weeks.
          </div>

          <div className="BoxMentOutterContainer">
            <Box pointer className="BoxMent">
              <div className="BoxMentContainer">
                <FaSmile size={24} />
                <span>Shipping starting at $149</span>
                <FaAngleRight size={24} />
              </div>
            </Box>
            <Box pointer className="BoxMent">
              <div className="BoxMentContainer">
                <FaTruck size={24} />
                <span>60-day returns</span>
                <FaAngleRight size={24} />
              </div>
            </Box>
          </div>
        </div>
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
  background-color: ${(props) => props.theme.yellowColor};
  padding-bottom: 70px;

  ${down("lg")} {
    max-width: unset;
    background-color: unset;
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
    padding: 0px 20px;
    ${down("lg")} {
      max-width: unset;
    }
  }
  ${down("lg")} {
    display: flex;
    flex-flow: column nowrap;
  }

  & .delivered {
    margin: 20px 0px;
  }
  & .payContainer {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
  & .ButtonMentOutterContainer {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    & .ButtonMentContainer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 40px 0 64px;
    }

    & .ButtonMent {
      height: 60px;
      margin: 10px 0px;
      background-color: ${(props) => props.theme.greyColor};
      color: ${(props) => props.theme.whiteColor};

      ${down("lg")} {
        width: 380px;
      }
    }
    & .ButtonMent:nth-child(2) {
      background-color: ${(props) => props.theme.brownColor};
    }
  }

  & .BoxMentOutterContainer {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    & .BoxMent {
      height: 50px;
      margin: 10px 0px;
      width: 340px;
    }

    & .BoxMentContainer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 40px 0 64px;
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