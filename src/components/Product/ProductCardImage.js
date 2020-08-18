import React from "react";

import Box from "components/Box";
import styled from "styled-components";

function ProductCardImage({
  className,
  title,
  subTitle,
  imageURL,
  imageContent,
  isActive = false,
}) {
  return (
    <SProductCardImage isActive={isActive} className={className}>
      <div className="row">
        <div className="row__title">{title}</div>
        <div className="subTitle">{subTitle}</div>
      </div>

      {imageURL ? (
        <div className="row">
          <img alt="상품이미지" src={imageURL} className="image"></img>
          <div className="imageContent">{imageContent}</div>
        </div>
      ) : null}
    </SProductCardImage>
  );
}

export default ProductCardImage;

const SProductCardImage = styled.div`
  /* flex-grow: 1; */

  border: ${(props) => props.theme.borderDefault};

  & .row:nth-child(1) {
    background-color: ${(props) =>
      props.isActive ? props.theme.brownColor : props.theme.whiteColor};
    color: ${(props) =>
      props.isActive ? props.theme.whiteColor : props.theme.brownColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border-bottom: ${(props) => props.theme.borderDefault}; */
  }
  & .row:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    border: ${(props) =>
      props.isActive ? props.theme.borderBrown : props.theme.borderDefault};
  }

  & .row__title {
    font-size: 1.2em;
  }
  & .subTitle {
    font-size: 0.9em;
  }
  & .image {
    width: 128px;
    height: 70px;
  }
  & .imageContent {
    padding-top: 10px;
  }
`;