import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;
  border: ${(props) => props.theme.borderDefault};
  border: ${(props) => (props.color === "red" ? props.theme.borderRed : null)};

  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  cursor: ${(props) => (props.pointer ? "pointer" : null)};
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => (props.color === "red" ? props.theme.redColor : null)};

  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;

const Box = ({ className, onClick, children, color = "", pointer = false }) => (
  <Container
    className={className}
    onClick={onClick}
    color={color}
    pointer={pointer}
  >
    {children}
  </Container>
);

export default Box;
