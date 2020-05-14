import styled from "styled-components";

import {textColor} from "./colors";

export const ActionButton = styled.button`
  border: 0;
  cursor: pointer;
  font-size: 0.90rem;
  padding: 12px 20px;
  color: ${textColor};
  border-radius: 50px;
  font-weight: bolder;
  background-image: linear-gradient(to right, #FFBF00 , #FF5E00);
`;