import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.textarea`
  border: 0;
  border: ${(props) => props.theme.boxBorder};
  border-radius: 5px;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.darkBrownColor};
  height: 35px;
  font-size: 12px;
  padding: 15px;
`;

const TextArea = ({
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

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default TextArea;
