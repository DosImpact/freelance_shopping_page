import React from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";

function ProductImage({
  className,
  imageURL,
  imageTitle,
  imageContent,
  isActive = false,
  row = false,
}) {
  return (
    <SProductImage isActive={isActive} className={className}>
      <div className="row">
        <div className="imageContainer">
          <img alt="상품이미지" src={imageURL} className="image"></img>
          <div className="imageGrey"></div>
        </div>
      </div>
    </SProductImage>
  );
}

export default ProductImage;

const SProductImage = styled.div`
  height: 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  & .row {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  & .imageContainer {
    position: relative;
  }

  & .image {
    width: 98px;
    height: 98px;
    border: ${(props) =>
      props.isActive
        ? props.theme.borderBrownStrong1px
        : props.theme.borderBrownDefault1px};
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    ${down("sm")} {
      width: 58px;
      height: 58px;
    }
  }
  & .image:hover {
    border: ${(props) => props.theme.borderBrownHover1px};
  }
  & .imageGrey {
    width: 98px;
    height: 98px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    background-color: ${(props) =>
      props.isActive ? null : `rgba(0, 0, 0, 0.05)`};
    ${down("sm")} {
      width: 58px;
      height: 58px;
    }
  }
  & .imageTitle {
    margin-top: 5px;
  }
  & .imageContent {
    text-align: center;
    padding-top: 5px;
    font-size: 0.6em;
    letter-spacing: 0.02em;
  }
`;
