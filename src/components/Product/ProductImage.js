import React from "react";

import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

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
        ? props.theme.borderBrownStrong
        : props.theme.borderBrownDefault};
  }
  & .image:hover {
    border: ${(props) => props.theme.borderBrownHover};
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
