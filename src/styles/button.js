import styled from "styled-components";

import {darkTextColor, bgDefaultButton} from "./colors";

export const ActionButton = styled.button`
  border: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.90rem;
  padding: 12px 20px;
  border-radius: 50px;
  color: ${darkTextColor};
  background-image: ${bgDefaultButton};
`;