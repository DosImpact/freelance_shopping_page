import React from "react";

import styled from "styled-components";

function ProductCardImage({ className, title, subTitle, imageURL }) {
  return (
    <SProductCardImage className={className}>
      <div className="row">
        <div className="title">{title}</div>
        <div className="subTitle">{subTitle}</div>
      </div>
      <div className="row">
        <img alt="상품이미지" src={imageURL} className="image"></img>
      </div>
    </SProductCardImage>
  );
}

export default ProductCardImage;

const SProductCardImage = styled.div``;
