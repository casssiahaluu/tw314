import styled from "styled-components";

import { centeredElement } from "../../styles/helpers";

export const Container = styled.div`
  ${centeredElement}
  height: 100%;
  flex-wrap: wrap;
  text-align:  center;
  flex-direction: column;

  .version-number {
    font-size: 1rem;
  }
`;

export const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 235px;
`;