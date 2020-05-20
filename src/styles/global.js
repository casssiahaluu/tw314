import { createGlobalStyle } from "styled-components";
import {bgDefaultPage, darkTextColor} from "./colors";
import {hoverColor} from "./helpers";

import "font-awesome/css/font-awesome.css";

export const Global = createGlobalStyle`

html, body {
  margin: 0;
  font-size: 16px;
  color: ${darkTextColor};
  background-color: ${bgDefaultPage};
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Comfortaa', 'Helvetica', Arial, sans-serif;

  a {
    color: linkTextColor;
    
    ${hoverColor}
  }
}
`;