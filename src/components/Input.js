import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 0;
  border: ${(props) => props.theme.boxBorder};
  border-radius: 5px;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.darkBrownColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
`;

const Input = ({
  placeholder,
  required = false,
  value,
  onChange,
  type = "text",
  className,
  id,
  onBlur,
}) => (
  <Container
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    id={id}
    onBlur={onBlur}
  />
);

export default Input;
