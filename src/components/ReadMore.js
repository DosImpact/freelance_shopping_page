import React, { useState } from "react";
import styled from "styled-components";

function ReadMore({ className, text, chunk = 300 }) {
  const [short, setShort] = useState(true);
  return (
    <>
      <Span className={className} short={short}>
        <span className="visible">{text.substring(0, chunk)}</span>
        <span className="hidden">{text.substring(chunk)}</span>
      </Span>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => setShort(!short)}
        className="button brown"
      >
        {short ? " ...Read More" : " ...Read Less"}
      </span>
    </>
  );
}

export default ReadMore;

const Span = styled.span`
  & .hidden {
    display: ${(props) => (props.short ? "none" : "line")};
    transition: opacity 0.4s ease-in-out;
    opacity: ${(props) => (props.short ? 0 : 1)};
  }
`;
