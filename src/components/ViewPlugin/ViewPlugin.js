import React from "react";
import styled from "styled-components";
import { down, up } from "styled-breakpoints";
import { FaComment } from "react-icons/fa";
// import { down } from "styled-breakpoints";

import ChooseImage from "components/Product/ChooseImage";

function ViewPlugin({ editorFormik }) {
  return (
    <OutterContainer>
      <SmallerContainer>
        <div className="column">
          <ChooseImage
            className="ImageList"
            formik={editorFormik}
            name="rotate"
            count={5}
          />
        </div>
        <div className="column">
          <div className="box">
            <div className="chat">
              <FaComment className="chatIcon" size={18} />
              <span className="chatMes">Chat with a Design Specialist</span>
            </div>
          </div>
          <div className="chatSub">
            Complimentary advice, floor plans, mood boards, and more.
          </div>
        </div>
      </SmallerContainer>

      <LagerContainer>
        <div className="column">
          <ChooseImage formik={editorFormik} name="rotate" count={5} />
        </div>
        <div className="column">
          <div className="chat">
            <FaComment size={18} />
            <span className="chatMes">Chat with a Design Specialist</span>
          </div>
          <div className="chatSub">
            Complimentary advice, floor plans, mood boards, and more.
          </div>
        </div>
      </LagerContainer>
    </OutterContainer>
  );
}

export default ViewPlugin;

const OutterContainer = styled.div`
  margin: 0 auto;
  max-width: 580px;
  width: 100%;
  ${down("sm")} {
    max-width: 100%;
  }
`;

const SmallerContainer = styled.div`
  ${up("md")} {
    display: none;
  }
  & .column:nth-child(1) {
    min-height: 140px;
    padding: 0px 10px;
    & .ImageList {
      margin: 0 auto;
      max-width: 335px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
  }
  & .column:nth-child(2) {
    padding: 14px 0 20px;
    background-color: ${(props) => props.theme.lightBrownColor};
    border-top: ${(props) => props.theme.borderDefault};
    border-bottom: ${(props) => props.theme.borderDefault};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    & .box {
      background-color: ${(props) => props.theme.whiteColor};

      display: inline-block;
      height: 45px;
      line-height: 43px;
      border: 1px solid #ddd;
      background: #fff;
      border-radius: 5px;
      cursor: pointer;
      padding: 0 1em 0 27px;
      margin: 0 0 10px;
      color: #676564;
      font-size: 1em;
      letter-spacing: 0.02em;

      position: relative;
    }
  }
  & .chat {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .chatMes {
    margin-left: 15px;
    margin-bottom: 2px;
    ::before {
      content: "";
      background-color: #f8e81b;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
      margin: 0 0.3em 0 0;
    }
  }
  & .chatIcon {
    position: absolute;
    top: 11px;
    left: 12px;
    font-size: 1.6em;
    color: #aaa;
  }
  & .chatSub {
    text-align: center;
    width: 50%;
    margin-top: 10px;
  }
`;

const LagerContainer = styled.div`
  max-width: 580px;
  min-height: 230px;
  border: ${(props) => props.theme.borderDefault};
  border-radius: 4px;
  margin: 40px 0px;
  ${down("sm")} {
    /* border: unset; */
    display: none;
  }
  & .column:nth-child(1) {
    min-height: 140px;
    padding: 0px 10px;
  }
  & .column:nth-child(2) {
    border-top: ${(props) => props.theme.borderDefault};
    padding: 20px 0px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    ${down("sm")} {
      font-size: 0.8em;
      padding: 0px;
      border-top: none;
    }
  }
  & .chat {
  }
  & .chatMes {
    margin-left: 15px;
    border-bottom: 1px dotted;
    margin-bottom: 2px;
    ::before {
      content: "";
      background-color: #f8e81b;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
      margin: 0 0.3em 0 0;
    }
  }

  & .chatSub {
    text-align: center;
    width: 50%;
    margin-top: 10px;
  }
`;
