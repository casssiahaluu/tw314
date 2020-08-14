import styled from "styled-components";

import backgroundImage from "../../assets/images/backgroundFade-min.jpg";
import { linkTextColor} from "../../styles/colors";
import {centeredElement} from "../../styles/helpers";

export const Container = styled.main`
  ${centeredElement}
  height: 100vh;
  background-image: url(${backgroundImage});
`;

export const Form = styled.div`
  display: flex;
  max-width: 400px;
  align-items: center;
  flex-direction: column;

  img {
    margin: 10px 0 15px;
  }

  .info {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 15px;
  }

  a {
    font-size: 1rem;
    color: ${linkTextColor};
    text-decoration: underline;

    &:hover {
      color: darken(10%, ${linkTextColor});
    }
  }
`;