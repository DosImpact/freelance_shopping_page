import React from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";

const ScrollBox = ({ className, children }) => {
  //   const scrollRef = useRef(null);
  //   //   const [currentH, setCurrentH] = useState(0);
  //   useLayoutEffect(() => {
  //     const handleScroll = (e) => {
  //       console.log("scrolled", e.target.scrollHeight, e.target.scrollTop);
  //       e.target.scrollHeight = Math.ceil(e.target.scrollTop / 150) * 150;
  //       console.log(Math.ceil(e.target.scrollTop / 150) * 150);
  //     };
  //     scrollRef.current.addEventListener("scroll", handleScroll);
  //   }, []);

  return <Container className={className}>{children}</Container>;
};

export default ScrollBox;

const Container = styled.div`
  height: 200px;
  width: 350px;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 7px;
  box-shadow: inset 0 0 5px 0 rgba(21, 21, 21, 0.15);
  padding: 5px;
  ${down("md")} {
    padding-left: 8px;
    height: 150px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    /* width */
    ::-webkit-scrollbar {
      height: 3px;
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 7px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 7px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }
`;
