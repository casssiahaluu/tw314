import styled from "styled-components";

import backgroundImage from "../../assets/images/backgroundFade-min.jpg";
import { bgDefaultPage, darkTextColor, errorTextColor } from "../../styles/colors";
import { centeredElement, transitionAllEase } from "../../styles/helpers";

export const Container = styled.div`
  ${centeredElement}
  height: 100vh;
  flex-wrap: wrap;
  text-align:  center;
  background-image: url(${backgroundImage});

  div {
    &.qr-links { margin-bottom: 15px; }
    
    &.qr-title, &.qr-links { align-self: flex-end; }

    h1 { font-size: 1.7rem; }
  }
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 10px;

  input {
    height: 30px;
    border-radius: 20px;
    padding: 0 40px 0 10px;
    color: ${darkTextColor};
    border: 1px solid #8B8B8B;
    background-color: ${bgDefaultPage};
    ${transitionAllEase}
    
    &:focus {
      box-shadow: 0 0 5px 0 #8B8B8B;
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
    }
  }
`;
