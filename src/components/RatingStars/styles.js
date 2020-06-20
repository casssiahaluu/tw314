import styled from "styled-components";

import { transitionAllEase } from "../../styles/helpers";

export const Stars = styled.div`
  label input[type="radio"] {
    display: none;

    ${transitionAllEase}
  }
`;