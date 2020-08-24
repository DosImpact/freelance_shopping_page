import React from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";

import ChooseImage from "components/Product/ChooseImage";

function Editor({ editorFormik }) {
  return (
    <OutterContainer>
      <InnterContainer>
        <div className="column">
          <ChooseImage formik={editorFormik} name="rotate" count={5} />
        </div>
        <div className="column"></div>
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
  }
`;
