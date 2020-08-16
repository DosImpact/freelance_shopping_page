import React, { useState } from "react";

function ReadMore({ className, text, chunk = 300 }) {
  const [short, setShort] = useState(true);
  return (
    <>
      <span className={className}>
        {short ? text.substring(0, chunk) : text}
      </span>
      <span onClick={() => setShort(!short)} className="brown">
        {short ? " ...Read More" : " ...Read Less"}
      </span>
    </>
  );
}

export default ReadMore;
