import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

export const Global = createGlobalStyle`

html, body {
  margin: 0;
  font-size: 16px;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Comfortaa', 'Helvetica', Arial, sans-serif;
}
`;