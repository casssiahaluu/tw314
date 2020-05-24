import styled from "styled-components";

import {bgDefaultButton, browShadowColor} from "./colors";
import { transitionAllEase } from "./helpers";

export const ActionButton = styled.button`
  border: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.90rem;
  padding: 12px 20px;
  border-radius: 50px;
  background-size: 150% 100%;
  background-image: ${bgDefaultButton};
  box-shadow: 0 0 3px 0 ${browShadowColor};
  ${transitionAllEase}

  &:hover, &:focus, &:active {
    ${transitionAllEase}
    background-position: 100% 0;
    box-shadow: 0 0 4px 0 ${browShadowColor};
    background-image: linear-gradient(to right, #FF5E00, #F2913D, #FFBF00);
  }
`;