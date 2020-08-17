import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 40px;
  height: 40px;
  border: ${(props) => props.theme.borderDefault};
  border-radius: 5px;
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.darkBrownColor};

  transition: all 0.2s ease-in-out;

  :hover {
    color: ${(props) => props.theme.brownColor};
    border: ${(props) => props.theme.borderBrown};
  }
`;

const Button = ({
  type = "button",
  className,
  text,
  onClick,
  children,
  color = "",
  disabled,
}) => (
  <Container
    type={type}
    className={className}
    onClick={onClick}
    color={color}
    disabled={disabled}
  >
    {text ? text : children}
  </Container>
);

export default Button;
