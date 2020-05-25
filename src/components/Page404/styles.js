import styled from "styled-components";

import { lightColor } from "../../styles/colors";
import {centeredElement} from "../../styles/helpers";

import backgroundImage from "../../assets/images/dagobah404.jpg";

export const Container = styled.div`
  ${centeredElement}
  height: 100vh;
  flex-wrap: wrap;
  text-align: center;
  color: ${lightColor};
  background-size: cover;
  background-image: url(${backgroundImage});

  div {
    flex-basis: 100%;

    h1 {
      margin: 0;
      font-size: 8rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 600;
    }

    img {
      width: 100%;
      height: auto;
      max-width: 250px;
    }

    &.logo {
      max-width: 50px;
    }
  }
`;
 