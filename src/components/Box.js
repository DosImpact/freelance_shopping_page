import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  height: 40px;
  border: ${(props) => props.theme.borderRed};
  border-radius: 5px;
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.redColor};

  transition: all 0.2s ease-in-out;

  :hover {
    /* color: ${(props) => props.theme.brownColor}; */
    /* border: ${(props) => props.theme.borderBrown}; */
  }
`;

const Box = ({ className, onClick, children, color = "" }) => (
  <Container className={className} onClick={onClick} color={color}>
    {children}
  </Container>
);

Box.propTypes = {
  text: PropTypes.string,
};

export default Box;
