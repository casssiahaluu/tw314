import { createGlobalStyle } from "styled-components";
import {bgDefaultPage, darkTextColor, errorTextColor, linkTextColor} from "./colors";
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

  p {
    &.error {
      font-weight: 600;
      font-size: 0.8rem;
      color: ${errorTextColor};
    }

    &.info {
      font-weight: 600;
      font-size: 0.8rem;
    }
  }
  a {
    color: ${linkTextColor};
    
    ${hoverColor}
  }
}
`;