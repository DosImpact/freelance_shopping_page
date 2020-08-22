import React from "react";

import styled from "styled-components";

function ProductCardImage({
  className,
  imageURL,
  imageTitle,
  imageContent,
  isActive = false,
  row = false,
}) {
  return (
    <SProductCardImage isActive={isActive} className={className}>
      <div className="row">
        <img alt="상품이미지" src={imageURL} className="image"></img>
        <div className="rowContent">
          <div className="imageTitle">{imageTitle}</div>
          <div className="imageContent">{imageContent}</div>
        </div>
      </div>
    </SProductCardImage>
  );
}

export default ProductCardImage;

const SProductCardImage = styled.div`
  height: 150px;
  padding: 10px 5px;
  & .row {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  & .rowContent {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  & .row__title {
    font-size: 1.2em;
  }
  & .subTitle {
    font-size: 0.9em;
  }
  & .image {
    width: 75px;
    height: 75px;
    border: ${(props) =>
      props.isActive ? props.theme.borderBrownStrong : null};
  }
  & .imageTitle {
    margin-top: 5px;
  }
  & .imageContent {
    text-align: center;
    padding-top: 5px;
    font-size: 0.7em;
    letter-spacing: 0.02em;
  }
`;
