import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

import backgroundImage from "../assets/images/background.jpg";

createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body, html {
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
`;