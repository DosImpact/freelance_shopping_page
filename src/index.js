import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Theme from "Styles/Theme";
import GlobalStyles from "Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
