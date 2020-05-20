import styled from "styled-components";

import backgroundImage from "../../assets/images/backgroundFade-min.jpg";
import { errorTextColor, linkTextColor} from "../../styles/colors";
import {centeredElement} from "../../styles/helpers";

export const Container = styled.div`
  height: 100vh;
  ${centeredElement}
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

  p {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 15px;

    &.error{
      font-size: 0.85rem;
      text-align: center;
      color: ${errorTextColor};
    }
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