import styled from "styled-components";

import backgroundImage from "../../assets/images/backgroundFade-min.jpg";
import { lightColor, browShadowColor, darkColor } from "../../styles/colors";
import { centeredElement, transitionAllEase } from "../../styles/helpers";

export const Container = styled.main`
  ${centeredElement}
  height: 100vh;
  flex-wrap: wrap;
  text-align:  center;
  background-image: url(${backgroundImage});

  div {
    &.qr-links { margin-bottom: 35px; }
    
    &.qr-title, &.qr-links { 
      flex-basis: 100%;
      align-self: end; 
    }

    h1 { font-size: 1.7rem; }
  }
`;

export const InputGroup = styled.form`
  position: relative;
  margin-bottom: 10px;

  input {
    height: 30px;
    margin: 10px;
    color: ${darkColor};
    border-radius: 20px;
    padding: 0 40px 0 10px;
    background-color: ${lightColor};
    border: 1px solid ${browShadowColor};

    ${transitionAllEase}
    
    &:focus {
      box-shadow: 0 0 5px 0 ${browShadowColor};
    }
  }

  button {
    top: 5px;
    right: 10px;
    border: none;
    cursor: pointer;
    background: none;
    padding: 4px 6px;
    position: absolute;

    img {
      width: 100%;
      height: auto;
      max-width: 1rem;

      ${transitionAllEase}

      &:hover, &:focus, &active {
        filter: brightness(105%);
      }
    }
  }
`;
