import React from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";

import ChooseImage from "components/Product/ChooseImage";

function Editor({ editorFormik }) {
  return (
    <OutterContainer>
      <InnterContainer>
        <ChooseImage formik={editorFormik} name="rotate" count={5} />
      </InnterContainer>
    </OutterContainer>
  );
}

export default Editor;

const OutterContainer = styled.div``;

const InnterContainer = styled.div``;
