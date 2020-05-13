import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  background-color: #FFFAE9;
  box-sizing: border-box;
}

body, html {
  font-size: 16px;
  background-color: #FFFAE9;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
}
`;