import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  width: 100%;
  height: 40px;
  border: ${(props) => props.theme.borderDefault};
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.darkBrownColor};

  transition: all 0.2s ease-in-out;
  :hover {
    background-color: ${(props) => props.theme.lightGreyColor};
    box-shadow: ${(props) => props.theme.boxShadow};
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

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
