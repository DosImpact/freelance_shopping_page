import React from "react";
import styled from "styled-components";
import { FaComment } from "react-icons/fa";
// import { down } from "styled-breakpoints";

import ChooseImage from "components/Product/ChooseImage";

function Editor({ editorFormik }) {
  return (
    <OutterContainer>
      <InnterContainer>
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
      </InnterContainer>
    </OutterContainer>
  );
}

export default Editor;

const OutterContainer = styled.div`
  margin: 0 auto;
  max-width: 580px;
  width: 100%;
`;

const InnterContainer = styled.div`
  width: 580px;
  height: 230px;
  border: ${(props) => props.theme.borderDefault};
  border-radius: 4px;
  margin: 40px 0px;

  & .column:nth-child(1) {
    height: 140px;
    padding: 0px 10px;
  }
  & .column:nth-child(2) {
    border-top: ${(props) => props.theme.borderDefault};
    padding: 20px 0px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
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
  }
`;
